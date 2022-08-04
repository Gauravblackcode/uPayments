import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter, Switch, useHistory, useRouteMatch, withRouter } from 'react-router-dom'
import PublicRoute from '../../routes/PublicRoute'
import { AddItem, DashboardContentWrapper, DashboardPageLayout } from '../../styled-component/Container.styled'
import ProductContainer from '../ProductContainer'
import ProductContainerDetails from '../ProductDetails'
import FilterComponent from '../Shared-Component/Filter'
import HeaderComponent from '../Shared-Component/HeaderComponent'
import ProductCreateComponent from './ProductCreate'
const Dashboard = () => {

  const {path} = useRouteMatch()
  const history = useHistory()

  React.useEffect(() => { 
    console.log(path,"path")

  },[])

  return (
    <DashboardPageLayout>
      <DashboardContentWrapper>
        <HeaderComponent></HeaderComponent>

        <Switch>
          <PublicRoute exact  component={ProductContainer} path={path}  />
          <PublicRoute exact component={ProductCreateComponent} path={`${path}/create`}  />
          <PublicRoute exact component={ProductContainerDetails} path={`${path}/:id`}  />
        </Switch>
      </DashboardContentWrapper>
      <AddItem onClick={() => history.push(`${path}/create`)}>+</AddItem>
    </DashboardPageLayout>
  )
}

export default withRouter(Dashboard)