import React from 'react';
import { useForm } from 'react-hook-form';
import useActiveUser from '../../hooks/useActiveUser';

const AddReview = () => {
    const [activeUser, refetch] = useActiveUser()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    return (
        <div>
            <h2 className="text-3xl">Add Your Details</h2>
          <form
            //onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-1 justify-items-center mt-2"
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Opinion</span>
              </label>
              <textarea class="textarea textarea-bordered" placeholder="write something "
              {...register("review", {
                required: {
                  value: true,
                  message: "Review is Required",
                },
              })}
              ></textarea>
              
              <label className="label">
                {errors.review?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.review.message}
                  </span>
                )}
              </label>
            </div>
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Rating (Out of 5)</span>
              </label>
              <input
                type="text"
                placeholder="Your Rating"
                className="input input-bordered w-full max-w-xs"
                {...register("rating", {
                  required: {
                    value: true,
                    message: "Rating is Required",
                  },
                })}
              />
              <label className="label">
                {errors.rating?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.rating.message}
                  </span>
                )}
              </label>
            </div>
            
            
            
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="ADD REVIEW"
            />
          </form>
        </div>
    );
};

export default AddReview;