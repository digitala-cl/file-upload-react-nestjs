import React, { Component } from 'react';
import axios from 'axios';
export default class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            profileImg: ''
        }
    }
    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }
   async onSubmit(e) {
        e.preventDefault()

        // send photo with axios
        // let formData = new FormData()
        // formData.append('photo', this.state.profileImg)
        // await axios.post("http://localhost:4000/photos/upload", formData, {
        // }).then(res => {
        //     console.log(res)
        // }).catch((err)=>console.log(err))

        // send photo with Fetch API
        let formData = new FormData();
        formData.append('photo', this.state.profileImg, this.state.profileImg.name);
        try {
          const response = await fetch('http://localhost:4000/photos/upload', {
            method: 'POST',
            body: formData,
          });
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          console.log(response);
        } catch (err) {
          console.log(err);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}