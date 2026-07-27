import DashboardLayout from "@/components/layouts/DashboardLayout";
import DetailCategory from "@/components/views/Admin/DetailCategory";

const AdminDetailBannerPage = () => {
  return (
    <DashboardLayout
      title="Detail Banner"
      description="Manage informtion for this banner"
      type="admin"
    >
      <DetailCategory />
    </DashboardLayout>
  );
};

export default AdminDetailBannerPage;
