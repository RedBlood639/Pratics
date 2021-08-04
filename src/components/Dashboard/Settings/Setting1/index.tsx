import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetBuddyAvatarList } from "../../../../store/BuddyAvatar/actions";
import { AppState } from "../../../../store";
//
import CustomCard from "./CustomCard";
import { Modal } from "react-bootstrap";
import { s3Config } from "../../s3Config";
import ReactS3Client from "react-aws-s3-typescript";
import { uuidv4 } from "../../../../utility/Generator";
import { apiClientwithToken } from "../../../apiClient";
import "./style.scss";
//

interface DisplayContent {
  filename: string;
  type: string;
}

const initialdisplay = {
  filename: "",
  type: "",
};
const Setting1: React.FC = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState<any>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<any>();
  const [uploadAvatarError, setUploadAvatarError] = useState<string>("");
  const [fileDisplayContent, setFileDisplayContent] =
    useState<DisplayContent>(initialdisplay);

  //
  const buddylist = useSelector((state: AppState) => state.buddylist.list);
  useEffect(() => {
    dispatch(GetBuddyAvatarList());
  }, []);

  useEffect(() => {
    setItems(buddylist);
  }, [buddylist]);

  const handleModal = (flag: boolean) => {
    setShowModal(flag);
  };

  const handleSubmit = async () => {
    if (fileDisplayContent.filename.trim() === "") {
      setUploadAvatarError("Please select avatar");
      setFileDisplayContent(initialdisplay);
      return;
    }
    const s3 = new ReactS3Client(s3Config);
    await s3
      .uploadFile(selectedFile, uuidv4())
      .then(async (data: any) => {
        const postData = {
          filename: data.key,
          url: data.location,
        };
        await apiClientwithToken(localStorage.getItem("mindmail_admin_token"))
          .post("/admin/addchatbuddyavatar", postData)
          .then((res) => {
            setFileDisplayContent(initialdisplay);
            dispatch(GetBuddyAvatarList());
            setShowModal(false);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleAvatarchange = async (event: any) => {
    console.log(event.target.files[0].type);
    if (
      event.target.files[0].type !== "image/jpeg" &&
      event.target.files[0].type !== "image/png"
    ) {
      setUploadAvatarError("Only *.png, *.jpg");
      setFileDisplayContent(initialdisplay);
      return;
    }
    setUploadAvatarError("");
    if (event.target.files.length) {
      setFileDisplayContent({
        ...fileDisplayContent,
        filename: event.target.files[0].name,
        type: event.target.files[0].type,
      });
      setSelectedFile(event.target.files[0]);
    } else {
      setFileDisplayContent(initialdisplay);
    }
  };
  return (
    <>
      <div className="chatbuddy-container">
        <div className="chatbuddy-header">
          <span>{`Count ${items.length} `}</span>
          <button onClick={() => handleModal(true)}>New Item</button>
        </div>
        <div className="chatbuddy-content">
          {items.map((item: any, index: number) => (
            <CustomCard key={index} item={item} />
          ))}
        </div>
      </div>

      <Modal
        animation={false}
        onHide={setShowModal}
        show={showModal}
        centered
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <span>{"ADD NEW AVATAR"}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="avatar-modal">
            <div className="avatar-upload">
              <label htmlFor="upload-avatar">{"Select new Avatar"}</label>
              <input
                type="file"
                id="upload-avatar"
                className="uploadavatar"
                accept=".jpg, .png"
                onChange={handleAvatarchange}
              />
            </div>
            <br />
            {uploadAvatarError !== "" ? (
              <div style={{ textAlign: "center" }}>
                <span style={{ color: "red", fontSize: "0.8rem" }}>
                  {uploadAvatarError}
                </span>
              </div>
            ) : (
              ""
            )}
            {fileDisplayContent.filename ? (
              <div className="avatar-preview">
                <div>
                  <span>file : </span>
                  <span>{fileDisplayContent.filename}</span>
                </div>
                <br />
                <div>
                  <span>type : </span>
                  <span>{fileDisplayContent.type}</span>
                </div>
                <br />
              </div>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button role="discard" onClick={() => handleModal(false)}>
            Discard
          </button>
          <button role="submit" onClick={() => handleSubmit()}>
            Upload
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Setting1;
