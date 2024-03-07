import React from "react";


const Reservation = () => {


  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p> Big Order Please Call Me <b>(+91) 9175237382</b> </p>  
           
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                /> 
                <input
                  type="text"
                  placeholder="Last Name"
                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  // value={date}
                  // onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  // value={time}
                  // onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}/
                />
                <input
                  type="number"
                  placeholder="Phone"
                  // value={phone}
                  // onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="Text"
                  placeholder="Item Name"
                  // value={phone}
                  // onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  {/* <HiOutlineArrowNarrowRight /> */}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
