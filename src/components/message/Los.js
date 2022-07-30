import React from 'react';
import { Link } from 'react-router-dom';
class Los extends React.Component {
    render() {
        return (
            <div className="container">
                <div class="row mt-5">
                    <div class="col-12 col-md-6 col-lg-4 col-sm-6 m-auto">

                        <div class="card-body">
                            <p class="card-text con-t">You loose</p>
                            <button className="btn bg-danger con-rr"><Link to="/main" class="card-link con-r">Play Again</Link></button>
                            <button className="btn bg-primary"><Link to="/" class="card-link con-l">Log Out</Link></button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Los;