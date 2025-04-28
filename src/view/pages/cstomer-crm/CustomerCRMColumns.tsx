import moment from 'moment';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AiTwotoneDelete } from 'react-icons/ai';
import { RiEditLine } from 'react-icons/ri';
import { ACTION_TYPE, FORMAT, RoutesPath } from '../../../common/types/enum/CommonEnum';
import { useNavigate } from 'react-router-dom';

const CustomerCRMColumns = ({
    setAction
}: {
    setAction: React.Dispatch<React.SetStateAction<{
      customer: any;
      actionType: any;
  } | undefined>> 
}) => {
  const navigate = useNavigate();
  const formatDate = (date: Date): string => {
    const format = date ? moment(date).utc().format(FORMAT.NORAML_DATE) : 'N/A';
    return format;
  };

  const onReview = (id: string) =>{
    console.log(id);
    
    navigate(RoutesPath.CUSTOMER_ORDER_REVIEW.replace(':id', id));
  }

  return [
    {
      name: 'Actions',
      cell: (row: any) => (
        <DropdownButton id="dropdown-item-button" title="Action">
            <Dropdown.Item
            onClick={() => {
              onReview(row.id)
            }}
              as="button"
            >
              <i className="dropdown-icon">
                <RiEditLine />
              </i>
              Review
            </Dropdown.Item>
        </DropdownButton>
      ),
    },
    {
      id: 'customerName',
      name: 'Customer Name',
      selector: (row: any) => row.customerName,
      wrap: true,
      sortable: true,
    },
    {
      id: 'userName',
      name: 'User Name',
      selector: (row: any) => row.userName,
      wrap: true,
      sortable: true,
    },
    {
      id: 'email',
      name: 'Email',
      selector: (row: any) => row.email,
      wrap: true,
      sortable: true,
    },
    {
      id: 'createdAt',
      name: 'Created At',
      selector: (row: any) => formatDate(row.createdAt),
      wrap: true,
      sortable: true,
    },
    {
      id: 'updatedAt',
      name: 'Updated At',
      selector: (row: any) => formatDate(row.updatedAt),
      wrap: true,
      sortable: true,
    },
  ];
};

export default CustomerCRMColumns;
