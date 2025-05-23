import { useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { useParams } from 'react-router-dom';
import CustomerCRMApi from '../../../api/CustomerCRMApi';
import { KeyValueAny } from '../../../common/types/interface/Common.interface';
import { useToggle } from '../../../hooks/useToogle';
import CustomerDetailsComponent from '../../common/common-components/CustomerDetailsComponent';
import { DynamicDataTable } from '../../data-table/DynamicDataTable';
import OrderDetailsColumn from './OrderDetailsColumn';

const CustomerOrdersReviewPage = () => {
  const { id: customerId } = useParams();
  const [action, setAction] = useState<any>();
  const orderDetailsColumns = OrderDetailsColumn();
  const { status } = useToggle();
  const customerCRMInstance = CustomerCRMApi.getCustomerCRMInstance();

  const setActionProperty = (changedValues: KeyValueAny) => {
    const changedProps: KeyValueAny = {};
    Object.entries(changedValues).forEach(([key, value]) => {
      changedProps[key] = value;
    });
    setAction((preState: any) => ({ ...preState, ...changedProps }));
  };

  const getCustomerOrders = async (
    keyword: string | null,
    size: number,
    offset: number,
    colName: string,
    sort: string,
  ) => {
    return await trackPromise(
      customerCRMInstance.getCRMCustomerOrders(customerId, size, offset, keyword, colName, sort),
    );
  };

  const getCustomerDetails = async () => {
    const customerDetails = await trackPromise(
      customerCRMInstance.getCRMCustomerDetails(customerId),
    );
    setActionProperty({ customerDetails });
  };
  useEffect(() => {
    getCustomerDetails();
  }, []);

  return (
    <div className="containt-management">
      <CustomerDetailsComponent customerDetails={action?.customerDetails} />
      <div className="containt-table-container">
        {/* Your dynamic table component will go here */}
        <DynamicDataTable
          columns={orderDetailsColumns}
          tableDataGetApi={getCustomerOrders}
          filterDefaultText={'Search By Order Name / Order Type'}
          reRender={status}
        />
      </div>
    </div>
  );
};

export default CustomerOrdersReviewPage;
