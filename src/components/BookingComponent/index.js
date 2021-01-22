import React from "react"
import Image from "../../images/doctorimage.png"
import {
  BookingConfirmation,
  Container,
  ImageContainer,
  InnerContainer,
} from "./styled"

const BookingContainer = () => {
  return (
    <Container>
      <BookingConfirmation>Booking Confirmation</BookingConfirmation>
      <InnerContainer>
        <ImageContainer src={Image}></ImageContainer>
      </InnerContainer>
    </Container>
  )
}

export default BookingContainer
