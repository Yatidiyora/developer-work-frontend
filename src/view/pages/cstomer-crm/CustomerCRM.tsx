import { trackPromise } from 'react-promise-tracker';
import CustomerCRMApi from '../../../api/CustomerCRMApi';
import { useToggle } from '../../../hooks/useToogle';
import { DynamicDataTable } from '../../data-table/DynamicDataTable';
import CustomerCRMColumns from './CustomerCRMColumns';

const CustomerCRM = () => {
  const customerColumns = CustomerCRMColumns();
  const { status } = useToggle();

  const customerInstance = CustomerCRMApi.getCustomerCRMInstance();

  const getUsers = async (
    keyword: string | null,
    size: number,
    offset: number,
    colName: string,
    sort: string,
  ) => {
    return await trackPromise(
      customerInstance.getCRMCustomers(size, offset, keyword, colName, sort),
    );
  };
  return (
    <div className="containt-management">
      {/* Page Header */}
      <div className="containt-management-header">
        <h2>Users Management</h2>
        <button className="add-user-btn">+ Add New</button>
      </div>

      {/* Table Container (Dynamic Content) */}
      <div className="containt-table-container">
        {/* Your dynamic table component will go here */}
        <DynamicDataTable
          columns={customerColumns}
          tableDataGetApi={getUsers}
          filterDefaultText={'Search By User Name / Email'}
          reRender={status}
        />
      </div>
    </div>
  );
};

export default CustomerCRM;
