import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormDeliveryDetailsWrapper,
  Form,
  FormLeft,
  FormRight,
  FormWrapper,
  FormInput,
  FormTextarea,
  FormTextAreaCount,
} from "./styles";

const FormDeliveryDetails = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();
  const [characterCount, setCharacterCount] = useState(0)

  // const districtRealTime = watch('deliveryAddress').length;

  // const counterTextarea = 120 - watch("deliveryAddress").lenght;

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
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "*Please enter valid email",
                },
              })}
            />
          </FormWrapper>

          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: {
                  value: /^0\d{9,12}/g,
                  message: "*Please enter valid phone number",
                },
              })}
            />
            {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (
              <p>Max length exceeded</p>
            )}
          </FormWrapper>

          <FormWrapper>
            <FormTextarea
              autoComplete="off"
              placeholder="Delivery Address"
              {...register("deliveryAddress", {
                required: true,
                maxLength: 120,
              })}
            />
            <FormTextAreaCount>{characterCount}</FormTextAreaCount>
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
