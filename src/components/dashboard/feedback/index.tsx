import React from "react";
import FeedbackImage from "./image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classnames from "classnames";
import Section from "../../shared/section";

type FeedbackT = {
  email: string;
  fullname: string;
  message: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  fullname: yup.string().required(),
  message: yup.string().required(),
});

const Feedback = () => {
  const [feedbackSend, setFeedbackSend] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FeedbackT>({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: FeedbackT) => {
    console.log({ data });
    setFeedbackSend(true);
    setTimeout(() => {
      setFeedbackSend(false);
    }, 30000); // 30sec
    reset();
  };
  const handleClose = () => {
    setFeedbackSend(false);
  };
  return (
    <Section.Col>
      <>
        <Section.Title title="Feedback" />
        <Section.Body className="md:grid md:grid-cols-2 md:gap-10">
          <>
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="flex flex-col bg-gray-50 shadow-lg rounded p-8 md:p-16"
            >
              {feedbackSend && (
                <div className="relative p-2 bg-green-100">
                  <span className="text-green-900 text-base">
                    Thank you for your FEEDBACK!
                  </span>
                  <span
                    onClick={handleClose}
                    className="absolute text-green-900 cursor-pointer right-4 top-3 text-sm font-bold"
                  >
                    X
                  </span>
                </div>
              )}

              <label className="my-2 font-normal" htmlFor="fullname">
                Fullname
              </label>
              <input
                className={classnames("rounded", {
                  "border-red-500": errors?.fullname,
                })}
                id="fullname"
                type="text"
                {...register("fullname")}
                placeholder="type here..."
              />
              {errors?.fullname && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.fullname.message}
                </span>
              )}
              <label className="my-2 font-normal" htmlFor="email">
                Email
              </label>
              <input
                className={classnames("rounded", {
                  "border-red-500": errors?.fullname,
                })}
                id="email"
                type="email"
                {...register("email")}
                placeholder="type email..."
              />
              {errors?.email && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </span>
              )}
              <label className="my-2 font-normal" htmlFor="message">
                Message
              </label>

              <textarea
                className={classnames("rounded", {
                  "border-red-500": errors?.fullname,
                })}
                id="message"
                {...register("message")}
                placeholder="type message..."
                rows={3}
              ></textarea>
              {errors?.message && (
                <span className="text-sm text-red-500 mt-1">
                  {errors.message.message}
                </span>
              )}

              <button
                type="submit"
                className="inline-block py-2 w-32 bg-blue-600 text-white font-semibold text-lg 
        leading-tight uppercase rounded shadow-md mt-5
        hover:bg-blue-700 hover:shadow-lg 
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg 
        transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
            <FeedbackImage />
          </>
        </Section.Body>
      </>
    </Section.Col>
  );
};

export default Feedback;
