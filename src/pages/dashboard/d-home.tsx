import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { getRoomBookingThunk, selectRoomBookingState } from "../../redux-toolkit/room/room-slice";

function DHome() {
    const dispatch = useAppDispatch();
    const { roomBooking } = useAppSelector(selectRoomBookingState);

    useEffect(() => {
        dispatch(getRoomBookingThunk());
    }, [])

    return ( 
        <>
            <h1>รายการจองห้องประชุมทั้งหมด</h1>
            <p>{JSON.stringify(roomBooking?.events)}</p>
        </>
    );
}

export default DHome;
