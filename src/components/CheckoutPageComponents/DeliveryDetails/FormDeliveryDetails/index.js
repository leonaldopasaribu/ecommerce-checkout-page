import React from "react";
import { useForm } from "react-hook-form";

import {
  FormDeliveryDetailsWrapper,
  Form,
  FormLeft,
  FormRight,
  FormWrapper,
  FormInput,
  FormTextarea,
} from "./styles";

const FormDeliveryDetails = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <FormDeliveryDetailsWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLeft>
          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email Cannot be blank",
              })}
            />
          </FormWrapper>

          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: "Phone Number Cannot be blank",
                minLength: { value: 6, message: "Min 3 character" },
                maxLength: { value: 20, message: "Max 20 character" },
                pattern: {
                  value: /^0\d{9,12}/g,
                  message: "*Please enter valid phone number",
                },
              })}
            />
          </FormWrapper>

          <FormWrapper>
            <FormTextarea
              autoComplete="off"
              placeholder="Delivery Address"
              {...register("deliveryAddress", {
                required: "Delivery Address Cannot be blank",
                maxLength: { value: 120, message: "Max 120 character" },
              })}
            />
          </FormWrapper>
        </FormLeft>
        <FormRight>
          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="text"
              placeholder="Dropshipper name"
              {...register("dropshipperName")}
            />
          </FormWrapper>
          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="text"
              placeholder="Dropshipper phone number"
              {...register("dropshipperPhoneNumber")}
            />
          </FormWrapper>
        </FormRight>
      </Form>
    </FormDeliveryDetailsWrapper>
  );
};

export default FormDeliveryDetails;
