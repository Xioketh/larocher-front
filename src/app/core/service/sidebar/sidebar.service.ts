import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {routes} from '../../core.index';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      localStorage.getItem('isMobileSidebar') || 'false'
    );

  public expandSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public switchSideMenuPosition(): void {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next('false');
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next('true');
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }


  public sidebarData1 = [
    {
      tittle: 'Main',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          route: routes.dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          subMenus: [],
        }
      ],
    },
    {
      tittle: 'Customers',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Customers',
          route: routes.customer,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'user',
          subMenus: [
            {
              menuValue: 'Customers List',
              hasSubRoute: false,
              showSubRoute: false,
              page: 'add-transfer',
              page2: 'edit-transfer',
              route: routes.customerList,
              subRoutes: [],
            },
            {
              menuValue: 'Add Customers',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addCustomer,
              subRoutes: [],
            },
          ],
        },
      ],
    },
    {
      tittle: 'Products',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Products',
          route: routes.product,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'box',
          subMenus: [
            {
              menuValue: 'Product List',
              hasSubRoute: false,
              showSubRoute: false,
              page: 'add-transfer',
              page2: 'edit-transfer',
              route: routes.productList,
              subRoutes: [],
            },
            {
              menuValue: 'Product Add',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addProduct,
              subRoutes: [],
            },
          ],
        },
      ],
    },
    {
      tittle: 'Order',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Order',
          route: routes.categoryList,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'shopping-cart',
          subMenus: [
            {
              menuValue: 'Order List',
              hasSubRoute: false,
              showSubRoute: false,
              page: 'add-transfer',
              page2: 'edit-transfer',
              route: routes.categoryList,
              subRoutes: [],
            },
            {
              menuValue: 'Place Order',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.categoryList,
              subRoutes: [],
            },
          ],
        },
      ],
    },
    {
      tittle: 'User',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'User',
          route: routes.categoryList,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'user',
          subMenus: [
            {
              menuValue: 'User List',
              hasSubRoute: false,
              showSubRoute: false,
              page: 'add-transfer',
              page2: 'edit-transfer',
              route: routes.categoryList,
              subRoutes: [],
            },
            {
              menuValue: 'Add User',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.categoryList,
              subRoutes: [],
            },
            {
              menuValue: 'User Role',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.categoryList,
              subRoutes: [],
            },
            {
              menuValue: 'User Privilage',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.categoryList,
              subRoutes: [],
            },
          ],
        },
      ],
    },
    {
      tittle: 'Ingredients',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Ingredients',
          route: routes.categoryList,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'file-text',
          subMenus: [
            {
              menuValue: 'Ingredient List',
              hasSubRoute: false,
              showSubRoute: false,
              page: 'add-transfer',
              page2: 'edit-transfer',
              route: routes.categoryList,
              subRoutes: [],
            },
            {
              menuValue: 'Add Ingredients',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.categoryList,
              subRoutes: [],
            },
          ],
        },
      ],
    },
    {
      tittle: 'Report',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Report',
          route: routes.categoryList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bar-chart-2',
          subMenus: [],
        },
      ],
    },

  ];


  // ============================================= sidebarData2 ======================================================
  public sidebarData2 = [
    {
      tittle: 'Main Menu',
      hasSubRoute: true,
      icon: 'assets/img/icons/menu-icon.svg',
      showSubRoute: false,
      subRoutes: [
        {
          tittle: 'Dashboard',
          hasSubRoute: false,
          icon: 'assets/img/icons/dashboard.svg',
          showSubRoute: false,
          route: routes.dashboard,
          subRoutes: [],
        },
        {
          tittle: 'Product',
          hasSubRoute: true,
          icon: 'assets/img/icons/product.svg',
          showSubRoute: false,
          route: routes.product,
          subRoutes: [
            {
              tittle: 'Product List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.productList,
              subRoutes: [],
            },
            {
              tittle: 'Add Product',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addProduct,
              subRoutes: [],
            },
            {
              tittle: 'Category List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.categoryList,
              subRoutes: [],
            },
            {
              tittle: 'Add Category',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addCategory,
              subRoutes: [],
            },
            {
              tittle: 'Sub Category List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.subCategoryList,
              subRoutes: [],
            },
            {
              tittle: 'Add Sub Category',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addSubcategory,
              subRoutes: [],
            },
            {
              tittle: 'Brand List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.brandList,
              subRoutes: [],
            },
            {
              tittle: 'Import Products',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.importProduct,
              subRoutes: [],
            },
            {
              tittle: 'Print Barcode',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.barcode,
              subRoutes: [],
            },
          ],
        },
        {
          tittle: 'Sales',
          hasSubRoute: true,
          icon: 'assets/img/icons/sales1.svg',
          showSubRoute: false,
          route: routes.sales,
          subRoutes: [
            {
              tittle: 'Sales List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.salesList,
              subRoutes: [],
            },

            {
              tittle: 'New Sales',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addSales,
              subRoutes: [],
            },
            {
              tittle: 'Sales Return List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.salesReturnList,
              subRoutes: [],
            },
            {
              tittle: 'New Sales Return',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.createSalesReturn,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Purchase',
          hasSubRoute: true,
          icon: 'assets/img/icons/purchase1.svg',
          showSubRoute: false,
          route: routes.purchase,
          subRoutes: [
            {
              tittle: 'Purchase List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.purchaseList,
              subRoutes: [],
            },
            {
              tittle: 'Add Purchase',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addPurchase,
              subRoutes: [],
            },
            {
              tittle: 'Import Purchase',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.importPurchase,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Expense',
          hasSubRoute: true,
          icon: 'assets/img/icons/expense1.svg',
          showSubRoute: false,
          route: routes.expense,
          subRoutes: [
            {
              tittle: 'Expense List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.expenseList,
              subRoutes: [],
            },
            {
              tittle: 'Add Expense',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.createExpense,
              subRoutes: [],
            },
            {
              tittle: 'Expense Category',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.expenseCategory,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Quotation',
          hasSubRoute: true,
          icon: 'assets/img/icons/quotation1.svg',
          showSubRoute: false,
          route: routes.quotation,
          subRoutes: [
            {
              tittle: 'Quotation List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.quotationList,
              subRoutes: [],
            },
            {
              tittle: 'Add Quotation',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addQuotation,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Transfer',
          hasSubRoute: true,
          icon: 'assets/img/icons/transfer1.svg',
          showSubRoute: false,
          route: routes.transfer,
          subRoutes: [
            {
              tittle: 'Transfer List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.transferList,
              subRoutes: [],
            },
            {
              tittle: 'Add Transfer',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addTransfer,
              subRoutes: [],
            },
            {
              tittle: 'Import Transfer',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.importTransfer,
              subRoutes: [],
            },
          ],
        },
        {
          tittle: 'Return',
          hasSubRoute: true,
          icon: 'assets/img/icons/return1.svg',
          showSubRoute: false,
          route: routes.return,
          subRoutes: [
            {
              tittle: 'Sales Return List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.salesReturnList,
              subRoutes: [],
            },
            {
              tittle: 'Add Sales Return',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.createSalesReturn,
              subRoutes: [],
            },
            {
              tittle: 'Purchase Return List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.purchaseReturnList,
              subRoutes: [],
            },
            {
              tittle: 'Add Purchase Return',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.createPurchaseReturn,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'People',
          hasSubRoute: true,
          icon: 'assets/img/icons/users1.svg',
          showSubRoute: false,
          route: routes.people,
          subRoutes: [
            {
              tittle: 'Customer List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.customerList,
              subRoutes: [],
            },
            {
              tittle: 'Add Customer',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addCustomer,
              subRoutes: [],
            },
            {
              tittle: 'Supplier List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.supplierList,
              subRoutes: [],
            },
            {
              tittle: 'Add Supplier',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addSupplier,
              subRoutes: [],
            },
            {
              tittle: 'User List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.userList,
              subRoutes: [],
            },
            {
              tittle: 'Add User',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addUser,
              subRoutes: [],
            },
            {
              tittle: 'Store List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.storeList,
              subRoutes: [],
            },
            {
              tittle: 'Add Store',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.addStore,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Places',
          hasSubRoute: true,
          icon: 'assets/img/icons/places.svg',
          showSubRoute: false,
          route: routes.places,
          subRoutes: [
            {
              tittle: 'New Country',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.newCountry,
              subRoutes: [],
            },
            {
              tittle: 'Countries list',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.countriesList,
              subRoutes: [],
            },
            {
              tittle: 'New State',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.newState,
              subRoutes: [],
            },
            {
              tittle: 'State List',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.stateList,
              subRoutes: [],
            },
          ],
        },
      ],
    },

    {
      tittle: 'Users',
      hasSubRoute: true,
      icon: 'assets/img/icons/users1.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [
        {
          tittle: 'New User',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.newUser,
          subRoutes: [],
        },
        {
          tittle: 'User List',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.usersUserList,
          subRoutes: [],
        },
      ],
    },

    {
      tittle: 'Components',
      hasSubRoute: true,
      isSvg: true,
      icon: 'assets/img/icons/layers.svg',
      showSubRoute: false,
      subRoutes: [
        {
          tittle: 'Components',
          hasSubRoute: false,
          icon: 'assets/img/icons/layers.svg',
          showSubRoute: false,
          route: routes.components,
          subRoutes: [],
        },
        {
          tittle: 'Elements',
          hasSubRoute: true,
          icon: 'assets/img/icons/box.svg',
          showSubRoute: false,
          route: routes.element,
          subRoutes: [
            {
              tittle: 'Sweet Alerts',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.sweetAlerts,
              subRoutes: [],
            },
            {
              tittle: 'Tooltip',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.tooltip,
              subRoutes: [],
            },
            {
              tittle: 'Popover',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.popover,
              subRoutes: [],
            },
            {
              tittle: 'Ribbon',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.ribbon,
              subRoutes: [],
            },
            {
              tittle: 'Clipboard',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.clipboard,
              subRoutes: [],
            },
            {
              tittle: 'Drag & Drop',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.dragDrop,
              subRoutes: [],
            },
            {
              tittle: 'Range Slider',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.rangeSlider,
              subRoutes: [],
            },
            {
              tittle: 'Rating',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.rating,
              subRoutes: [],
            },
            {
              tittle: 'Toaster',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.toaster,
              subRoutes: [],
            },

            {
              tittle: 'Text Editor',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.textEditor,
              subRoutes: [],
            },
            {
              tittle: 'Counter',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.counter,
              subRoutes: [],
            },
            {
              tittle: 'Scrollbar',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.scrollbar,
              subRoutes: [],
            },
            {
              tittle: 'Spinner',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.spinner,
              subRoutes: [],
            },
            {
              tittle: 'Notification',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.notification,
              subRoutes: [],
            },
            {
              tittle: 'Lightbox',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.lightbox,
              subRoutes: [],
            },
            {
              tittle: 'Timeline',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.timeline,
              subRoutes: [],
            },
            {
              tittle: 'Form Wizard',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formWizard,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Charts',
          hasSubRoute: true,
          icon: 'assets/img/icons/bar-chart-2.svg',
          showSubRoute: false,
          route: routes.charts,
          subRoutes: [
            {
              tittle: 'Apex Charts',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.chartApex,
              subRoutes: [],
            },
            {
              tittle: 'Ng2 Charts',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.chartNg2,
              subRoutes: [],
            },
            {
              tittle: 'Prime NG Charts',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.chartPrime,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Icons',
          hasSubRoute: true,
          icon: 'assets/img/icons/award.svg',
          showSubRoute: false,
          route: routes.icons,
          subRoutes: [
            {
              tittle: 'Fontawesome Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconFontAwesome,
              subRoutes: [],
            },
            {
              tittle: 'Feather Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconFeather,
              subRoutes: [],
            },
            {
              tittle: 'Ionic Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconIonic,
              subRoutes: [],
            },
            {
              tittle: 'Material Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconMaterial,
              subRoutes: [],
            },
            {
              tittle: 'Pe7 Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconPe7,
              subRoutes: [],
            },
            {
              tittle: 'Simpleline Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconSimpleline,
              subRoutes: [],
            },
            {
              tittle: 'Themify Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconThemify,
              subRoutes: [],
            },
            {
              tittle: 'Weather Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconWeather,
              subRoutes: [],
            },
            {
              tittle: 'Typicon Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconTypicon,
              subRoutes: [],
            },
            {
              tittle: 'Flag Icons',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.iconFlag,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Forms',
          hasSubRoute: true,
          icon: 'assets/img/icons/columns.svg',
          showSubRoute: false,
          route: routes.forms,
          subRoutes: [
            {
              tittle: 'Basic Inputs',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formBasicInputs,
              subRoutes: [],
            },
            {
              tittle: 'Input Groups',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formInputsGroups,
              subRoutes: [],
            },
            {
              tittle: 'Horizontal Form',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formHorizontal,
              subRoutes: [],
            },
            {
              tittle: 'Vertical Form',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formVertical,
              subRoutes: [],
            },
            {
              tittle: 'Form Mask',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formMask,
              subRoutes: [],
            },
            {
              tittle: 'Form Validation',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formValidation,
              subRoutes: [],
            },
            {
              tittle: 'Form Select',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.formSelect,
              subRoutes: [],
            },
          ],
        },

        {
          tittle: 'Table',
          hasSubRoute: true,
          icon: 'assets/img/icons/layout.svg',
          showSubRoute: false,
          route: routes.table,
          subRoutes: [
            {
              tittle: 'Basic Tables',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.basicTable,
              subRoutes: [],
            },
            {
              tittle: 'Data Tables',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.dataTable,
              subRoutes: [],
            },
          ],
        },
        {
          tittle: 'Blank Page',
          hasSubRoute: false,
          icon: 'assets/img/icons/file.svg',
          showSubRoute: false,
          route: routes.blankPage,
          subRoutes: [],
        },
        {
          tittle: 'Error Pages',
          hasSubRoute: true,
          icon: 'assets/img/icons/alert-octagon.svg',
          showSubRoute: false,
          route: routes.errorPages,
          subRoutes: [
            {
              tittle: '404 Error',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.errorPage404,
              subRoutes: [],
            },
            {
              tittle: '500 Error',
              hasSubRoute: false,
              showSubRoute: false,
              route: routes.errorPage500,
              subRoutes: [],
            },
          ],
        },
      ],
    },

    {
      tittle: 'Report',
      hasSubRoute: true,
      icon: 'assets/img/icons/time.svg',
      showSubRoute: false,
      route: routes.report,
      subRoutes: [
        {
          tittle: 'Purchase order report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.purchaseOrderReport,
          subRoutes: [],
        },
        {
          tittle: 'Inventory Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.inventoryReport,
          subRoutes: [],
        },
        {
          tittle: 'Sales Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.salesReport,
          subRoutes: [],
        },
        {
          tittle: 'Invoice Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.invoiceReport,
          subRoutes: [],
        },
        {
          tittle: 'Purchase Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.purchaseReport,
          subRoutes: [],
        },
        {
          tittle: 'Supplier Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.supplierReport,
          subRoutes: [],
        },
        {
          tittle: 'Customer Report',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.customerReport,
          subRoutes: [],
        },
      ],
    },

    {
      tittle: 'Settings',
      hasSubRoute: true,
      icon: 'assets/img/icons/settings.svg',
      showSubRoute: false,
      route: routes.settings,
      subRoutes: [
        {
          tittle: 'General Settings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.generalSettings,
          subRoutes: [],
        },
        {
          tittle: 'Email Settings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.emailSettings,
          subRoutes: [],
        },
        {
          tittle: 'Payment Settings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.paymentSettings,
          subRoutes: [],
        },
        {
          tittle: 'Currency Settings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.currencySettings,
          subRoutes: [],
        },
        {
          tittle: 'Group Permissions',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.groupSettings,
          subRoutes: [],
        },
        {
          tittle: 'Tax Rates',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.taxRates,
          subRoutes: [],
        },
      ],
    },
  ];

}
