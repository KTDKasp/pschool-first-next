'use client';

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
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  React.useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (ratingNum: number) => {
    if (!isEditable) return;
    constructRating(ratingNum);
  };

  const handleClick = (ratingNum: number) => {
    if (!isEditable || !setRating) return;
    setRating(ratingNum);
  };

  const handleSpace = (
    ratingNum: number,
    e: React.KeyboardEvent<SVGElement>
  ) => {
    if (e.code !== 'Space' || !setRating) return;
    setRating(ratingNum);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((ratingElem, index) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => handleClick(index + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: React.KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(index + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((ratingElem, index) => (
        <span key={index}>{ratingElem}</span>
      ))}
    </div>
  );
};
