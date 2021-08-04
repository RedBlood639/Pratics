import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetMusicType,
  GetMusic,
  UpdateMusciType,
} from "../../../../store/MusicTime/actions";
import { AppState } from "../../../../store";
//
import Frametime from "./Frametime";
import AddSvg from "../../../../assets/icons/SVG/AddSvg";
import { Modal } from "react-bootstrap";
import { uuidv4 } from "../../../../utility/Generator";
import ReactS3Client from "react-aws-s3-typescript";
import { apiClientwithToken } from "../../../apiClient";
import { s3Config } from "../../s3Config";
import "./style.scss";

const initialType = {
  id: 0,
  musictype: "",
};

const initialMuic = {
  name: "",
  type: "",
  duration: "",
  url: "",
};

const Setting2: React.FC = () => {
  const dispatch = useDispatch();
  const [musictypelist, setMusictypelist] = useState([]);
  const [music, setMusic] = useState([]);
  const [showMusicType, setShowMusicType] = useState<boolean>(false);
  const [showMusic, setShowMusic] = useState<boolean>(false);
  const [selectedtypeId, setSelectedTypeId] = useState<number>(0);
  const [editType, setEditType] = useState(initialType);
  const [uploadmusic, setUploadmusic] = useState(initialMuic);
  const [uploadmusicError, setUploadmusicError] = useState<string>("");
  //
  const [selectedFile, setSelectedFile] = useState<any>();
  const musictypeState = useSelector(
    (state: AppState) => state.musictimelist.musictype
  );
  const musicState = useSelector(
    (state: AppState) => state.musictimelist.music
  );
  useEffect(() => {
    dispatch(GetMusicType());
  }, []);

  useEffect(() => {
    setMusictypelist(musictypeState);
    if (musictypeState.length !== 0) {
      setSelectedTypeId(musictypeState[0].id);
      dispatch(GetMusic(musictypeState[0].id));
    }
  }, [musictypeState]);

  useEffect(() => {
    setMusic(musicState);
  }, [musicState]);

  const handleSelectType = (id: number) => {
    setSelectedTypeId(id);
    dispatch(GetMusic(id));
  };

  const handleSubmitType = async () => {
    if (editType.musictype.trim() === "") {
      return;
    }
    if (editType.id !== 0) {
      await apiClientwithToken(localStorage.getItem("mindmail_admin_token"))
        .put("/admin/updatemusictype", editType)
        .then((res) => {
          dispatch(UpdateMusciType(editType));
          setShowMusicType(false);
        })
        .catch((e) => console.log(e));
    } else {
      await apiClientwithToken(localStorage.getItem("mindmail_admin_token"))
        .post("/admin/addmusictype", editType)
        .then((res) => {
          dispatch(GetMusicType());
          setShowMusicType(false);
        })
        .catch((e) => console.log(e));
    }
  };

  const handleDiscordType = () => {
    setEditType(initialType);
    setShowMusicType(false);
  };
  const handleEditType = (item: any) => {
    setShowMusicType(true);
    setEditType(item);
  };

  const handleAddType = () => {
    setEditType(initialType);
    setShowMusicType(true);
  };
  //
  const handleSubmitMusic = async () => {
    if (uploadmusic.name.trim() === "") {
      setUploadmusicError("Please select music");
      setUploadmusic(initialMuic);
      return;
    }

    const s3 = new ReactS3Client(s3Config);
    await s3
      .uploadFile(selectedFile, uuidv4())
      .then(async (data: any) => {
        const postData = {
          name: data.key,
          url: data.location,
          typeId: selectedtypeId,
          duration: uploadmusic.duration,
        };
        await apiClientwithToken(localStorage.getItem("mindmail_admin_token"))
          .post("/admin/addmusic", postData)
          .then((res) => {
            setUploadmusic(initialMuic);
            dispatch(GetMusic(postData.typeId));
            setShowMusic(false);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((err: any) => console.error(err));
  };

  const handleShowMusic = (flag: boolean) => {
    setShowMusic(flag);
    setUploadmusicError("");
    setUploadmusic(initialMuic);
  };

  const handlemusicchange = async (event: any) => {
    if (
      event.target.files[0].type !== "audio/mpeg" &&
      event.target.files[0].type !== "audio/wav"
    ) {
      setUploadmusicError("Only *.mp3, *.wav");
      setUploadmusic(initialMuic);
      return;
    }
    if (event.target.files.length) {
      const audio = document.createElement("audio");
      const reader = new FileReader();
      reader.onload = function (e: any) {
        audio.src = e.target.result;
        audio.addEventListener(
          "loadedmetadata",
          function () {
            const minutes = Math.floor(audio.duration / 60);
            const timeForSeconds = audio.duration - minutes * 60; // seconds without counted minutes
            const seconds = Math.floor(timeForSeconds);
            const secondsReadable = seconds > 9 ? seconds : `0${seconds}`; // To change 2:2 into 2:02
            const time = `${minutes}:${secondsReadable}`;
            setUploadmusicError("");
            setUploadmusic({
              name: event.target.files[0].name,
              type: event.target.files[0].type,
              duration: time,
              url: "",
            });
            setSelectedFile(event.target.files[0]);
          },
          false
        );
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setUploadmusicError("");
      setUploadmusic(initialMuic);
    }
  };

  return (
    <>
      <div className="setting2-container">
        <div className="sub-container">
          <div className="sub-body">
            <div className="musictype-container">
              <div className="sub-header">
                <span>MusicType</span>
                <div onClick={() => handleAddType()}>
                  <AddSvg />
                </div>
              </div>
              <div className="sub-content">
                {musictypelist.map((item: any) => (
                  <div
                    key={item.id}
                    className="pt1 sub-content-1"
                    onClick={() => handleSelectType(item.id)}
                  >
                    <a
                      className={`${
                        selectedtypeId === item.id ? "selected" : ""
                      } title`}
                    >
                      {item.musictype}
                    </a>
                    <a
                      href="#"
                      className="edit"
                      onClick={() => handleEditType(item)}
                    >
                      Edit
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="music-container">
              <div className="sub-header">
                <span>Music</span>
                <div onClick={() => handleShowMusic(true)}>
                  {musictypelist.length === 0 ? "" : <AddSvg />}
                </div>
              </div>
              <div className="sub-content music-with">
                <table>
                  <tbody>
                    {music.map((item: any, index: number) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.musicname}</td>
                        <td>
                          <a
                            href={item.musicURL}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.musicURL}
                          </a>
                        </td>
                        <td>{item.musictime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-container">
          <Frametime />
        </div>
      </div>
      <Modal
        animation={false}
        show={showMusicType}
        onHide={setShowMusicType}
        centered
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <span>{`${editType.id === 0 ? "ADD" : "EDIT"} MUSICTYPE`}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="musictype-modal">
            <p>MusicType :</p>
            <input
              type="text"
              className="mb1"
              placeholder="Input MusicType"
              value={editType.musictype}
              onChange={(e) =>
                setEditType({ ...editType, musictype: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button role="discard" onClick={() => handleDiscordType()}>
            Discard
          </button>
          <button role="submit" onClick={() => handleSubmitType()}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        animation={false}
        show={showMusic}
        onHide={setShowMusic}
        centered
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <span>{`${editType.id === 0 ? "ADD" : "EDIT"} MUSIC`}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="music-modal">
            <div className="music-upload">
              <label htmlFor="upload-music">{`${
                uploadmusic.name.trim() === "" ? "Please " : ""
              }Upload ${
                uploadmusic.name.trim() === "" ? " " : "Other"
              } Music`}</label>
              <input
                type="file"
                id="upload-music"
                className="uploadmusic"
                accept=".mp3, .wav"
                onChange={handlemusicchange}
              />
            </div>
            <br />
            {uploadmusicError !== "" ? (
              <div style={{ textAlign: "center" }}>
                <span style={{ color: "red", fontSize: "0.8rem" }}>
                  {uploadmusicError}
                </span>
              </div>
            ) : (
              ""
            )}
            {uploadmusic.name ? (
              <div className="music-preview">
                <div>
                  <span>time : </span>
                  <span>{uploadmusic.duration}</span>
                </div>
                <br />
                <div>
                  <span>type : </span>
                  <span>{uploadmusic.type}</span>
                </div>
                <br />
              </div>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button role="discard" onClick={() => handleShowMusic(false)}>
            Discard
          </button>
          <button role="submit" onClick={() => handleSubmitMusic()}>
            Upload
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Setting2;
