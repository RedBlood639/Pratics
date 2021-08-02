import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetBuddyAvatarList } from "../../../../store/BuddyAvatar/actions";
import { AppState } from "../../../../store";
//
import CustomCard from "./CustomCard";
import "./style.scss";
//
const Setting1: React.FC = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState<any>([]);
  const buddylist = useSelector((state: AppState) => state.buddylist.list);
  useEffect(() => {
    dispatch(GetBuddyAvatarList());
  }, []);

  useEffect(() => {
    setItems(buddylist);
  }, [buddylist]);
  return (
    <div className="chatbuddy-container">
      <div className="chatbuddy-header">
        <span>{`Count ${items.length} `}</span>
        <button>New Item</button>
      </div>
      <div className="chatbuddy-content">
        {items.map((item: any, index: number) => (
          <CustomCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Setting1;
