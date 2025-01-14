import React from 'react'
import Button from "../ui/Button";
import Layout from "../ui/Layout";

import classes from './CurrentOpenings.module.css'

const CurrentOpenings = () => {
  return (
    <div className={classes.container}>
      <Layout
        title="-: Ready to embark exiting career journey ;-"
        heading={"Current Openings?"}
        subheading={
          ""
        }
        style={{ boxShadow: "none" }}
        additionalClasses = {classes.layout}
        src="/testimonial_banner.svg"
      >
        <Button text={"Get in touch"} />
        <div className={classes.content}>
            <span>
                <h5>Travel Consultant</h5>
                <p>Current openings : 02</p>
                <p>Position Type : Full-Time</p>
                <p>Department: Travel Sales & Operations</p>
                <Button text={"Read Requirements"}/>
            </span>
            <span>
                <h5>Travel Consultant</h5>
                <p>Current openings : 02</p>
                <p>Position Type : Full-Time</p>
                <p>Department: Travel Sales & Operations</p>
                <Button text={"Read Requirements"}/>
            </span>
            <span>
                <h5>Travel Consultant</h5>
                <p>Current openings : 02</p>
                <p>Position Type : Full-Time</p>
                <p>Department: Travel Sales & Operations</p>
                <Button text={"Read Requirements"}/>
            </span>
            <span>
                <h5>Travel Consultant</h5>
                <p>Current openings : 02</p>
                <p>Position Type : Full-Time</p>
                <p>Department: Travel Sales & Operations</p>
                <Button text={"Read Requirements"}/>
            </span>
            <span>
                <h5>Travel Consultant</h5>
                <p>Current openings : 02</p>
                <p>Position Type : Full-Time</p>
                <p>Department: Travel Sales & Operations</p>
                <Button text={"Read Requirements"}/>
            </span>
            <span>
                <h5>Travel Consultant</h5>
                <p>Current openings : 02</p>
                <p>Position Type : Full-Time</p>
                <p>Department: Travel Sales & Operations</p>
                <Button text={"Read Requirements"}/>
            </span>
        </div>
      </Layout>
    </div>
  )
}

export default CurrentOpenings