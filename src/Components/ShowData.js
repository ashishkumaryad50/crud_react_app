import React, { useEffect } from "react";
import ListData from './ListData'
import './ShowData.css'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const ShowData = () => {
  const dispatch = useDispatch();
  const isFirstCall = useSelector((state) => state.isFirstCall);

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: 'FIRSTCALL', isFirstCall: false })
      await axios
        .get("https://reqres.in/api/users")
        .then((data) => {
          dispatch({
            type: 'DATA_RECEIVED', items: data.data.data
          });
        })
        .catch((err) => {
          console.log("Err: ", err);
        });
    };
    // getData();
    isFirstCall ? getData() : console.log("");
  }, [])
  const infoList = useSelector((state) => state.data);
  return (
    <div>
      {infoList.map((element) => (<ListData key={element.id} keyId={element.id}
        firstName={element.first_name} lastName={element.last_name} emailData={element.email} rawData={infoList}
      />))}
    </div>
  )
}
export default ShowData;
