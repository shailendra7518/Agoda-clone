import "./Vacation.css"

export function Vacation(){
    return <div className="main_vacation_div">
          <h2>Explore more travel vacation rentals</h2>
          <div className="all_image_div">
              <div className="card">
                  <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg" alt="" />
                  <th>Appartment</th>
                  <p>1,56,756 properties</p>
              </div>
              <div className="card">
                  <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-house.jpg" alt="" />
                  <th>Vacation rentals</th>
                  <p>5,17,703 properties</p>
              </div>
              <div className="card"> 
                  <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-villa.jpg" alt="" />
                  <th>Private Villas</th>
                  <p>1,81,167 properties</p>
              
              </div >
              <div className="card">
                  <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-bungalow.jpg" alt="" />
                  <th>Bungalows</th>
                  <p>8,801 properties</p>
                  </div>
          </div>
    </div>
}