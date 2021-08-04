import React, { PropsWithoutRef } from "react";

export interface ProfileImageProps {
  imagesrc: string;
  className?: string;
}

export default function ProfileImage({
  imagesrc,
  className,
}: PropsWithoutRef<ProfileImageProps>) {
  return (
    <div className={`${className}`}>
      <img src={imagesrc} alt="Juan Diego's Profile" />
    </div>
  );
}
