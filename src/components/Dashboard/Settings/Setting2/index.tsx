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
import "./style.scss";
import apiClient from "../../../apiClient";

const initialType = {
  id: 0,
  musictype: "",
};

const Setting2: React.FC = () => {
  const dispatch = useDispatch();
  const [musictypelist, setMusictypelist] = useState([]);
  const [music, setMusic] = useState([]);
  const [showMusicType, setShowMusicType] = useState<boolean>(false);
  const [selectedtypeId, setSelectedTypeId] = useState<number>(0);
  const [editType, setEditType] = useState(initialType);
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

  const handleSubmitType = () => {
    if (editType.id !== 0) {
      apiClient
        .put("/admin/updatemusictype", editType)
        .then((res) => {
          dispatch(UpdateMusciType(editType));
          setShowMusicType(false);
        })
        .catch((e) => console.log(e));
    } else {
      apiClient
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
                <div>{musictypelist.length === 0 ? "" : <AddSvg />}</div>
              </div>
              <div className="sub-content music-with">
                <table>
                  <tbody>
                    {music.map((item: any, index: number) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.musicname}</td>
                        <td>{item.musicURL}</td>
                        <td>{item.musictime}</td>
                        <td>
                          <a className="edit" href="#">
                            Edit
                          </a>
                        </td>
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
          <span>{`${editType.id === 0 ? "Add" : "Edit"} MusicType`}</span>
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
    </>
  );
};

export default Setting2;
