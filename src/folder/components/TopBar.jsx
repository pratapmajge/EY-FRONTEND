import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
    const styles = {
        container: {
          display: "flex",
          alignItems: "center",
          background: "white",
          borderRadius: "30px",
          padding: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          width: "280px",
          transition: "all 0.3s ease-in-out",
        },
        input: {
          flex: 1,
          border: "none",
          outline: "none",
          padding: "10px 15px",
          borderRadius: "30px",
          fontSize: "16px",
          color: "#333",
        },
        button: {
          background: "#007bff",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
          transition: "background 0.3s ease-in-out",
        },
        buttonIcon: {
          fontSize: "16px",
          color: "white",
        },
      };
  return (
   <section className="topBarSection" style={{backgroundColor:'#1f0724', color:"bisque"}}>
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>QUICK</h2>
            </Link>
        </div>
        {/* <div className="searchBar">
            <input type="text" placeholder='Search...' />
        </div> */}
        {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
        <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        
        
        style={styles.input}
      />
      <button style={styles.button}>
        <span style={styles.buttonIcon}>🔍</span>
      </button>
    </div>
        <div className="userAuth">
            Login / SignUp
        </div>
   </section>
  )
}

export default TopBar