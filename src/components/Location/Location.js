import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5695.370406161633!2d23.567450599110373!3d47.648350902264184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737dc14ac0ad78f%3A0xa50bcdeccf3c6b8!2sPolyvalent%20Hall%20Lascar%20Pana!5e0!3m2!1sen!2sro!4v1684413357656!5m2!1sen!2sro"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
