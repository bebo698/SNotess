import React from 'react';
import { NavLink } from 'react-router-dom';

function Home( ) {
    return (
        <>
         <div className="container my-5 d-flex">
         <div class="col-md-12 m-auto  text-right">
            <NavLink className="add p-2 btn" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-plus-circle"></i> Add
        New</NavLink>
        </div> 
    </div>    
    <div class="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <form action="/addNote" method="POST">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
                    </div>
                    <div class="modal-body">
                        <input placeholder="Type Title" name="title" class="form-control" type="text"/>
                        <textarea class="form-control my-2" placeholder="Type your note" name="desc" id="" cols="30" rows="10"></textarea>
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
            <div className="col-md-4 my-4">

                <div className="note p-4">
                    <h3 className="float-left">Title </h3>
                    <NavLink href="#"><i className="fas fa-edit float-right edit"></i></NavLink>
                    <NavLink href="#"> <i className="fas fa-trash-alt float-right px-3 del"></i></NavLink>
                    <span className="clearfix"></span>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam dolores eius asperiores ipsa nihil, itaque dicta et at deleniti esse saepe architecto neque necessitatibus quos, pariatur consequuntur maxime accusantium. </p>
                </div>
            </div>

        </div>
    </div>
    </>
    );
}

export default Home;