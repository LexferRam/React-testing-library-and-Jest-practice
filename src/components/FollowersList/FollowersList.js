import React, { useEffect, useState } from 'react'
import "./FollowersList.css"
import axios from "axios"
import { Link } from 'react-router-dom';

export default function FollowersList() {

    const [followers, setFollowers] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchFollowers = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get("https://randomuser.me/api")
                setLoading(false)
                setFollowers(data.results)
                // throw new Error("Error fetching data")
            } catch (error) {
                setError(true)
            }
        }

        fetchFollowers()
    }, []);



    return (
        <div className="followerslist-container">
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">Error fetching data</p>}
            <div>
                {followers.map((follower, index) => (
                    <div key={index} className="follower-item" data-testid={`follower-item-${index}`}>
                        <img src={follower.picture.large}/>
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}
