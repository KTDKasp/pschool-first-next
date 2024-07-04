'use client'

import React from 'react';
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from '../../../public/svg/gray-star.svg';

export interface RatingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  rating,
  isEditable = false,
  setRating,
  ...props
}) => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>))

  React.useEffect(() => {
    constructRating(rating);
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((ratingElem, index) => {
      return (
        <StarIcon className={cn(styles.star, {
          [styles.filled]: index < currentRating
        })}/>
      )
    });
    setRatingArray(updatedArray);
  };

  return <div {...props}>
    {ratingArray.map((ratingElem, index) => (<span key={index}>{ratingElem}</span>))}
  </div>;
};
