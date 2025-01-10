"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox";
import {
  checkboxFormSchema,
  type CheckboxFormData,
} from "@/lib/validations/checkbox-form.schema";

export default function FormExample() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<CheckboxFormData>({
    resolver: zodResolver(checkboxFormSchema),
    defaultValues: {
      acceptTerms: false,
      notifications: {
        email: false,
        sms: false,
        push: false,
      },
      interests: [],
      subscription: undefined,
      marketing: false,
    },
  });

  const onSubmit = (data: CheckboxFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="p-6 rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h1 className="text-2xl font-bold mb-6">Registration Form</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Terms and Conditions */}
            <div className="space-y-2">
              <Controller
                name="acceptTerms"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onChange={field.onChange}
                    error={!!errors.acceptTerms}
                    errorMessage={errors.acceptTerms?.message}
                  >
                    I accept the terms and conditions
                  </Checkbox>
                )}
              />
            </div>

            {/* Notification Preferences */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                Notification Preferences
              </h2>
              <div className="space-y-2">
                <Controller
                  name="notifications.email"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={field.onChange}
                      error={!!errors.notifications}
                    >
                      Email notifications
                    </Checkbox>
                  )}
                />
                <Controller
                  name="notifications.sms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={field.onChange}
                      error={!!errors.notifications}
                    >
                      SMS notifications
                    </Checkbox>
                  )}
                />
                <Controller
                  name="notifications.push"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={field.onChange}
                      error={!!errors.notifications}
                    >
                      Push notifications
                    </Checkbox>
                  )}
                />
                {errors.notifications && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.notifications.message}
                  </p>
                )}
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Areas of Interest</h2>
              <Controller
                name="interests"
                control={control}
                render={({ field }) => (
                  <CheckboxGroup
                    value={field.value}
                    onChange={field.onChange}
                    error={!!errors.interests}
                  >
                    <Checkbox value="technology">Technology</Checkbox>
                    <Checkbox value="design">Design</Checkbox>
                    <Checkbox value="business">Business</Checkbox>
                    <Checkbox value="marketing">Marketing</Checkbox>
                  </CheckboxGroup>
                )}
              />
              {errors.interests && (
                <p className="text-sm text-red-500">
                  {errors.interests.message}
                </p>
              )}
            </div>

            {/* Subscription Type */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Subscription Type</h2>
              <Controller
                name="subscription"
                control={control}
                render={({ field }) => (
                  <div className="space-y-2">
                    <Checkbox
                      checked={field.value === "free"}
                      onChange={() => field.onChange("free")}
                      color="default"
                    >
                      Free Plan
                    </Checkbox>
                    <Checkbox
                      checked={field.value === "pro"}
                      onChange={() => field.onChange("pro")}
                      color="primary"
                    >
                      Pro Plan
                    </Checkbox>
                    <Checkbox
                      checked={field.value === "enterprise"}
                      onChange={() => field.onChange("enterprise")}
                      color="secondary"
                    >
                      Enterprise Plan
                    </Checkbox>
                  </div>
                )}
              />
            </div>

            {/* Marketing Preferences */}
            <div className="space-y-2">
              <Controller
                name="marketing"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onChange={field.onChange}
                    color="success"
                  >
                    I want to receive marketing emails
                  </Checkbox>
                )}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Form Data Preview */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Form Data Preview</h2>
          <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md overflow-auto">
            {JSON.stringify(watch(), null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
