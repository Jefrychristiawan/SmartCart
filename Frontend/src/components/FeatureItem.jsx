/* eslint-disable react/prop-types */
import { green } from "@mui/material/colors"
export default function FeatureItem({ Icon, title, description }) {
  return (
    <div className="flex items-center space-x-3">
      <Icon sx={{ fontSize: 35, color: green[400] }} />
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  )
}
