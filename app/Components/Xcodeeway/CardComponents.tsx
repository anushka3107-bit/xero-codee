import CloudServices from "../../Images/Group 25415.png";
import Img1 from "../../Images/Group 25475.png";
import Img2 from "../../Images/Group 25476.png";
import Img3 from "../../Images/Group 25477.png";
import Img4 from "../../Images/Group 25478.png";
import Image1 from "../../Images/image 35.png";
import Image2 from "../../Images/Group 25480.png";
import Image3 from "../../Images/image 37.png";
import Image4 from "../../Images/Group 25481.png";
import CommonCardHeader from "./CommonCardHeader";
import CommonCard from "./CommonCard";

const CardComponents = () => {
  let data = [
    {
      heading: "01",
      title: "Self serve Infrastructure",
      desc: "Accelerate by self-serving production-ready infrastructure and customize as you scale.",
      list: [
        {
          title: "Configurable Build and Deploy pipelines",
          desc: "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
          img: CloudServices,
        },
      ],
    },
    {
      heading: "02",
      title: "Deploy applications, fast!",
      desc: "Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.",
      list: [
        {
          title: "Configurable Build and Deploy pipelines",
          desc: "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
          img: Img1,
        },
        {
          title: "Push to Deploy",
          desc: "Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.",
          img: Img2,
        },
        {
          title: "Multiple runtimes",
          desc: "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
          img: Img3,
        },
        {
          title: "Scale infinitely",
          desc: "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.",
          img: Img4,
        },
      ],
    },
    {
      heading: "03",
      title: "Visibility into costs and metrics",
      desc: "Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.",
      list: [
        {
          title: "Customizable cost dashboards and reports",
          desc: "Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.",
          img: Image1,
          size: 130,
        },
        {
          title: "Preview infra costs",
          desc: "See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.",
          img: Image2,
          size: 259,
        },
        {
          title: "Observability from day one",
          desc: "Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.",
          img: Image3,
          img2: Image4,
          size: 200,
        },
      ],
    },
  ];

  return data?.map((val, idx) => {
    return (
      <CommonCardHeader data={val}>
        {idx === 0 && (
          <div className="flex text-[12px] mt-20 items-center justify-start gap-3 w-[100%]">
            <div className="border-b-4 border-[blue] px-3 py-2">Your Cloud</div>
            <div className="border-2 border-opacity-5 border-[#494369] px-3 py-2">
              Infra Components
            </div>
            <div className="border-2 border-opacity-5 border-[#494369] px-3 py-2">
              Self-Hosted Apps
            </div>
          </div>
        )}

        {val?.list?.map((item, index) => {
          return (
            <CommonCard item={item} type={index % 2 === 0 ? "left" : "right"} />
          );
        })}
      </CommonCardHeader>
    );
  });
};

export default CardComponents;
