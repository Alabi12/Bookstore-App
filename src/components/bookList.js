import React from 'react';
import SingleBook from './singleBook';

const BookList = () => (
  <div className="BookList">
    <ul>
      <SingleBook title="Think and Grow Rich" author="Napoleon Hill" />
      <SingleBook title="Financial Advice" author="Warren Buffet" />
    </ul>
  </div>
);

export default BookList;
