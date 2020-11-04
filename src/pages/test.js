import React from 'react';

class PostRequestSetHeaders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: null
        };
    }

    componentDidMount() {
        // POST request using fetch with set headers
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                //'Authorization': 'Bearer my-token',
                //'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://dbcolegios.blockchainconsultora.com/', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    render() {
        const { postId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Set Headers</h5>
                <div className="card-body">
                    Returned Id: {postId}
                </div>
            </div>
        );
    }
}

export default PostRequestSetHeaders;