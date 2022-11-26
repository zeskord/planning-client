import React, { useState, useEffect, useRef } from "react"

function RoomPage() {

    return (
        <div className="container-sm">
            <div className="input-group input-group-lg my-2">
                <span className="input-group-text">Оценка</span>
                <input
                    type="number"
                    className="form-control"
                // onChange={markChange}
                // onKeyUp={markKeyUp}
                // value={markClient || ""}
                ></input>
                <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                // onClick={markSelect}
                >
                    . . .
                </button>
            </div>
        </div>
    )
}

export default RoomPage;