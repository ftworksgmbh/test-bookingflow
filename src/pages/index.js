import React from "react"
import BookingComponent from "../components/BookingComponent"
import { MainContainer } from "../components/BookingComponent/styled"
import MultiStepForm from "../components/MulltiStepComponent"
const IndexPage = () => (
  <div>
    <MainContainer>
      <BookingComponent />
      <MultiStepForm />
    </MainContainer>
  </div>
)

export default IndexPage
