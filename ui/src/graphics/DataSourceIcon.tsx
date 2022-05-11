import React from "react";

const DataSourceIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M5.57713 6.79872C5.13727 7.20222 5.09743 7.45581 5.09743 7.54373C5.09743 7.63166 5.13727 7.88525 5.57713 8.28874C6.01812 8.69329 6.74193 9.12877 7.76705 9.52651C9.80734 10.3181 12.7312 10.841 16.0383 10.841C19.3455 10.841 22.2693 10.3181 24.3096 9.52651C24.4745 9.46252 24.6317 9.39756 24.7811 9.3319V12.6503C22.3846 13.4678 19.3244 13.9384 16.0383 13.9384C12.4477 13.9384 9.12669 13.3765 6.64663 12.4142C5.41157 11.935 4.30631 11.3263 3.48329 10.5713C2.65913 9.81523 2 8.79399 2 7.54373C2 6.29348 2.65913 5.27224 3.48329 4.5162C4.30631 3.76121 5.41157 3.15248 6.64663 2.67327C9.12669 1.71101 12.4477 1.14905 16.0383 1.14905C19.629 1.14905 22.95 1.71101 25.43 2.67327C26.6651 3.15248 27.7704 3.76121 28.5934 4.5162C29.4175 5.27224 30.0767 6.29348 30.0767 7.54373C30.0767 7.56043 30.0765 23.5338 30.0763 23.5504C30.059 24.7779 29.4065 25.782 28.5934 26.528C28.1343 26.9491 27.5875 27.3247 26.9792 27.6577V7.54373C26.9792 7.45581 26.9394 7.20222 26.4995 6.79872C26.0585 6.39418 25.3347 5.9587 24.3096 5.56095C22.2693 4.76932 19.3455 4.24647 16.0383 4.24647C12.7312 4.24647 9.80734 4.76932 7.76705 5.56095C6.74193 5.9587 6.01812 6.39418 5.57713 6.79872Z"
        fill="#0569EA"
      />
      <path
        d="M5.09743 23.4305C5.09743 23.5185 5.13727 23.7721 5.57713 24.1756C6.01812 24.5801 6.74193 25.0156 7.76705 25.4133C9.80734 26.205 12.7312 26.7278 16.0383 26.7278C19.3455 26.7278 22.2693 26.205 24.3096 25.4133C24.4745 25.3493 24.6317 25.2844 24.7811 25.2187V28.5371C22.3846 29.3545 19.3244 29.8252 16.0383 29.8252C12.4477 29.8252 9.12669 29.2633 6.64663 28.301C5.41157 27.8218 4.30631 27.2131 3.48329 26.4581C2.65913 25.702 2 24.6808 2 23.4305L2.00141 11.0908C2.39967 12.4396 3.99834 13.5387 5.09743 13.9884V23.4305Z"
        fill="#0569EA"
      />
    </svg>
  );
};

const DataSourceIcon16 = () => {
  return <DataSourceIcon size={16} className="euiSideNavItemButton__icon" />;
};

const DataSourceIcon32 = () => {
  return (
    <DataSourceIcon
      size={32}
      className="euiIcon euiIcon--xLarge euiPageHeaderContent__titleIcon"
    />
  );
};

export { DataSourceIcon, DataSourceIcon16, DataSourceIcon32 };
