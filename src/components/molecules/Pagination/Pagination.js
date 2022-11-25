import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonWrapper } from './Pagination.styles';
import { Button } from '../../atoms/Button/Button';

const Pagination = ({ page, total_pages }) => {
  const navigate = useNavigate();
  const params = useLocation();

  //on first page, render Next page button only
  if (page < total_pages && page === 1) {
    return (
      <ButtonWrapper>
        <Button
          isSecondary
          onClick={() => navigate(`${params.pathname}?page=${page + 1}`)}
        >
          {`Page ${page + 1}`}
        </Button>
      </ButtonWrapper>
    );
  }
  //render both buttons
  else if (page < total_pages) {
    return (
      <ButtonWrapper>
        <Button onClick={() => navigate(`${params.pathname}?page=${page - 1}`)}>
          {`Page ${page - 1}`}
        </Button>
        <Button
          isSecondary
          onClick={() => navigate(`${params.pathname}?page=${page + 1}`)}
        >
          {`Page ${page + 1}`}
        </Button>
      </ButtonWrapper>
    );
  }

  //on last page renger Previous page button only
  else {
    return (
      <ButtonWrapper>
        <Button onClick={() => navigate(`${params.pathname}?page=${page - 1}`)}>
          {`Page ${page - 1}`}
        </Button>
      </ButtonWrapper>
    );
  }
};

export default Pagination;
