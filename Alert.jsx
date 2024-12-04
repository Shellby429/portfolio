import React from 'react';

const Alert = ({ type, text }) => {
  const bgColor = type === "danger" ? "bg-red-800" : "bg-blue-800";
  const iconBgColor = type === "danger" ? "bg-red-500" : "bg-blue-500";
  const alertLabel = type === "danger" ? "Failed" : "Success";

  return (
    <div
      className="absolute top-10 left-0 right-0 flex justify-center items-center"
      role="alert"
      aria-live="assertive"
    >
      <div
        className={`p-2 ${bgColor} items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
      >
        <p className={`flex rounded-full ${iconBgColor} uppercase px-2 py-1 text-xs font-semibold mr-3`}>
          {alertLabel}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
