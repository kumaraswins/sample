import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ServiceCard from "./service-card"
import Bar from "./bar"

const Services = () => {
  let services = [
    {
      id: 1,
      image: "search-doctor-icon.png",
      title: "Search Lawyer",
      description:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals.",
    },
    
    {
      id: 3,
      image: "consultation-icon.png",
      title: "Consultation",
      description:
        "Free consultation with our trusted lawyers and get the best recommendations.",
    },
    {
      id: 4,
      image: "details-info-icon.png",
      title: "Detail Info",
      description:
        "Free consultation with our trusted lawyers and get the best recommendations.",
    },
    {
      id: 5,
      image: "emergency-care-icon.png",
      title: "Support",
      description:
        "You can get 24/7 consultation.",
    },
    {
      id: 6,
      image: "tracking-icon.png",
      title: "Tracking",
      description: "Track and save your records and data.",
    },
  ]

  return (
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        padding: 10,
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">Our Services</Typography>
        <Bar />
        <Typography variant="subtitle1" style={{ margin: 30 }}>
        We provide progressive, and affordable connection with the lawyers, accessible on
          mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </Typography>
      </Grid>

      {services.map(service => (
        <Grid item xs={12} sm={4} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Button variant="outlined" color="primary" size="large">
          Learn More
        </Button>
      </Grid>
    </Grid>
  )
}
export default Services
