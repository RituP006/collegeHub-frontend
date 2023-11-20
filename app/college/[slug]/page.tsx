import CollegeDetails from "@/components/college/CollegeDetails";

const CollegePage = ({ params }: { params: { slug: string } }) => {
  return <CollegeDetails slug={params.slug} />;
};

export default CollegePage;
