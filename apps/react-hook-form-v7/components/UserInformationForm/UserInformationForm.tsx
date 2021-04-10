import { CheckboxInput, Options, SelectInput, TextInput } from '@tejas-nx/tejas-ui';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

type UserInformationFormValues = {
  firstName: string;
  lastName: string;
  tos: 1 | 0;
  state: string;
};

const initialState: UserInformationFormValues = {
  firstName: '',
  lastName: '',
  tos: 0,
  state: 'mh',
};

const options: Array<Options> = [
  {
    label: 'Maharashtra',
    value: 'mh',
  },
  {
    label: 'Arizona',
    value: 'az',
  },
  {
    label: 'Rajasthan',
    value: 'rj',
  },
];

const UserInformationForm = () => {
  const { control, handleSubmit, reset } = useForm<UserInformationFormValues>({
    defaultValues: initialState,
  });
  const [values, setValues] = useState(initialState);

  const onSubmit = handleSubmit((values) => setValues(values));

  return (
    <div
      className="w-full flex md:flex-row flex-col justify-between my-10 md:space-x-6 space-x-0 space-y-10"
      data-testid="UserInformationForm"
    >
      <div className="flex flex-col flex-auto w-full">
        <form className="space-y-4" onSubmit={onSubmit}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <TextInput label="First Name" {...field} />}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field }) => <TextInput label="Last Name" {...field} />}
          />

          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <SelectInput label="Select State" options={options} {...field} />
            )}
          />

          <Controller
            name="tos"
            control={control}
            render={({ field }) => (
              <CheckboxInput
                label="I agree to the Terms and Privacy Policy"
                {...field}
              />
            )}
          />

          <div className="flex flex-row-reverse space-x-reverse space-x-8 my-8">
            <button
              type="submit"
              className="flex-auto py-4 px-8 border border-gray-500 rounded-lg hover:bg-indigo-700 bg-blue-700 text-white"
            >
              Submit Form
            </button>
            <button
              type="button"
              className="flex-auto py-4 px-8 border border-gray-500 rounded-lg hover:bg-gray-300"
              onClick={() => reset()}
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col flex-auto w-full">
        <h1 className="text-xl mb-8">Form Values after submission</h1>
        {JSON.stringify(values)}
      </div>
    </div>
  );
};

export default UserInformationForm;
