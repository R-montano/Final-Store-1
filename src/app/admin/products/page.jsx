// app/admin/products/page.jsx

import AdminProductsPage from "@/components/admin/AdminProductsPage";
import OnlyAdmin from "@/components/admin/OnlyAdmin";

export default function Page() {
  return (
    <OnlyAdmin>
      <AdminProductsPage />
    </OnlyAdmin>
  );
}
