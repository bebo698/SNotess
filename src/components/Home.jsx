import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { data } from 'jquery';
// decoded_id 1
// show notes 
// name of navbar 
function Home() {
    let baseUrl = "https://route-egypt-api.herokuapp.com/"
    let token = localStorage.getItem('token')
    if (token) {
        var decoded = jwtDecode(token)
    }
    const [allNotes, setallNotes] = useState([]);

    const [deleteNote, setdeletenote] = useState(
        {
            masterField:
            {
                NoteID: "",
                token: localStorage.getItem('token')
            }
        }
         )
const [addnotee, setaddnotee] = useState(
    {
        title: "",
        desc: "",
        userID: decoded._id,
        token: localStorage.getItem('token')
    }
)
async function getallnotes() {
    let { data } = await axios.get(baseUrl + 'getUserNotes', {
        headers: {
            token, userID: decoded._id
        }
    })

    setallNotes(data.Notes)
}

async function addNote(e) {
    e.preventDefault()
    let { data } = await axios.post(baseUrl + 'addNote', addnotee)
    setaddnotee(data.Notes)
    // console.log(data.Notes)
    e.target.reset();
}
function getaddnote({ target }) {
    setaddnotee({ ...addnotee, [target.name]: target.value }
    )

}
//target
function getnoteid(value,masterField) {
    var updatedValue = value._id
    console.log(updatedValue)
    // //    console.log(x)
    //    setdeletenote({...deleteNote,data.not})
    setdeletenote(deleteNote => ({
      
        masterField:{NoteID:updatedValue,token:localStorage.getItem('token')} 
 
    }));

    // console.log(deleteNote.NoteID)
    // console.log(decoded._id)
    // console.log(value._id)

}

async function DeleteNote(e) {
    let { data } = await axios.delete(baseUrl + 'deleteNote', deleteNote)
    getallnotes()
    console.log("lol")
}

useEffect(() => {
    getallnotes()

})


// allNotes?.map((value, index) => {
// setdeletenote({ ...deleteNote, NoteID:value._id }) })


return (
    <>
        <div className="container my-5 d-flex">
            <div class="col-md-12 m-auto  text-right">
                <NavLink className="add p-2 btn" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-plus-circle"></i> Add
                    New</NavLink>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form onSubmit={addNote} >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input placeholder="Type Title" onChange={getaddnote} name="title" class="form-control" type="text" />
                            <textarea class="form-control my-2" onChange={getaddnote} placeholder="Type your note" name="desc" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Note</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className="container">
            <div className="row">
                {allNotes?.map((value, index) => {

                    return (

                        <div key={value._id} className="col-md-4 my-4 item">
                            <div onClick={() => { getnoteid(value) }} className="note p-4">
                                <h3 className="float-left"> {value.title} </h3>
                                {/* <h3>{value._id}</h3> */}
                                <NavLink href="#"><i className="fas fa-edit float-right edit"></i></NavLink>
                                <NavLink onClick={DeleteNote} href="#"> <i className="fas fa-trash-alt float-right px-3 del"></i></NavLink>

                                <span className="clearfix"></span>
                                <p> {value.desc} </p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    </>
);
}

export default Home;