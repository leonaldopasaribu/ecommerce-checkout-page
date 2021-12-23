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
              type="text"
              placeholder="Name"
              {...register("name")}
            />
          </FormWrapper>

          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
          </FormWrapper>

          <FormWrapper>
            <FormTextarea
              autoComplete="off"
              type="text"
              placeholder="Delivery Address"
              {...register("deliveryAddress")}
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
