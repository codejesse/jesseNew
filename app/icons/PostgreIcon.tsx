import React from "react";

interface postgreIconAttributes {
  className?: string;
}

export const PostgreIcon: React.FC<postgreIconAttributes> = ({
  className = "",
}: postgreIconAttributes) => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        rx="30"
        fill="transparent"
        stroke="transparent"
        stroke-width="0"
        stroke-opacity="100%"
        paint-order="stroke"
      ></rect>
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor">
          <path
            fill="currentColor"
            d="M22.839 0a13.59 13.59 0 0 0-3.677.536l-.083.027a15.132 15.132 0 0 0-2.276-.219c-1.573-.027-2.923.353-4.011.989C11.719.964 9.495.317 7.151.448c-1.629.088-3.411.583-4.735 1.979C1.104 3.818.407 5.974.552 8.912c.041.807.271 2.124.656 3.837c.38 1.709.917 3.709 1.589 5.537c.672 1.823 1.405 3.463 2.552 4.577c.572.557 1.364 1.032 2.296.991c.652-.027 1.24-.313 1.751-.735c.249.328.516.468.755.599c.308.167.599.281.907.355c.552.14 1.495.323 2.599.135a5.083 5.083 0 0 0 1.167-.359l.047 1.307c.057 1.38.095 2.656.505 3.776c.068.183.251 1.12.969 1.953c.724.833 2.129 1.349 3.739 1.005c1.131-.24 2.573-.677 3.532-2.041c.948-1.344 1.375-3.276 1.459-6.412c.02-.172.047-.312.072-.448l.224.021h.027c1.208.052 2.521-.12 3.62-.631c.968-.448 1.703-.901 2.239-1.708c.131-.199.281-.443.319-.86c.041-.411-.199-1.063-.595-1.364c-.791-.604-1.291-.375-1.828-.26a8.698 8.698 0 0 1-1.599.192c1.541-2.593 2.645-5.353 3.276-7.792c.375-1.443.584-2.771.599-3.932c.021-1.161-.077-2.187-.771-3.077C28.481.802 25.423.03 23.059.005h-.219zm-.063.855c2.235-.021 5.093.604 7.145 3.228c.464.589.6 1.448.584 2.511s-.213 2.328-.573 3.719c-.692 2.699-2.011 5.833-3.859 8.652a.847.847 0 0 0 .208.115c.385.161 1.265.296 3.025-.063c.443-.095.767-.156 1.105.099a.69.69 0 0 1 .244.568a.921.921 0 0 1-.177.448c-.339.509-1.009.995-1.869 1.396c-.76.353-1.855.536-2.817.547c-.489.005-.937-.032-1.319-.152l-.02-.004c-.147 1.411-.484 4.203-.704 5.473c-.176 1.025-.484 1.844-1.072 2.453c-.589.615-1.417.979-2.537 1.219c-1.385.297-2.391-.021-3.041-.568s-.948-1.276-1.125-1.719c-.124-.307-.187-.703-.249-1.235a26.832 26.832 0 0 1-.136-1.911c-.041-1.12-.057-2.24-.041-3.365a4.092 4.092 0 0 1-2.068 1.016c-.921.156-1.739 0-2.228-.12a3.032 3.032 0 0 1-.693-.271c-.229-.12-.443-.255-.588-.527a.75.75 0 0 1-.073-.509a.806.806 0 0 1 .287-.443c.265-.215.615-.333 1.14-.443c.959-.199 1.297-.333 1.5-.496c.172-.135.371-.416.713-.828c0-.015 0-.036-.005-.052a3.961 3.961 0 0 1-1.771-.479c-.197.208-1.224 1.292-2.468 2.792c-.521.624-1.099.984-1.713 1.011c-.609.025-1.163-.281-1.631-.735c-.937-.912-1.688-2.48-2.339-4.251s-1.177-3.744-1.557-5.421c-.375-1.683-.599-3.037-.631-3.688c-.14-2.776.511-4.645 1.625-5.828s2.641-1.625 4.131-1.713c2.672-.151 5.213.781 5.724.979c.989-.672 2.265-1.088 3.859-1.063a9.85 9.85 0 0 1 2.24.292l.027-.016a9.11 9.11 0 0 1 .984-.28a12.864 12.864 0 0 1 2.76-.339zm.203.89h-.197c-.76.009-1.527.099-2.271.26c1.661.735 2.916 1.864 3.801 3c.615.781 1.12 1.64 1.505 2.557c.152.355.251.651.303.88c.031.115.047.213.057.312c0 .052.005.105-.021.193c0 .005-.005.016-.005.021c.043 1.167-.249 1.957-.287 3.072c-.025.808.183 1.756.235 2.792c.047.973-.072 2.041-.703 3.093c.052.063.099.125.151.193c1.672-2.636 2.88-5.547 3.521-8.032c.344-1.339.525-2.552.541-3.509c.016-.959-.161-1.657-.391-1.948c-1.792-2.287-4.213-2.871-6.24-2.885zm-6.391.343c-1.572.005-2.703.48-3.561 1.193c-.887.74-1.48 1.745-1.865 2.781c-.464 1.224-.625 2.411-.688 3.219l.021-.011a6.787 6.787 0 0 1 1.771-.687c.667-.157 1.391-.204 2.041.052c.657.249 1.193.848 1.391 1.749c.939 4.344-.291 5.959-.744 7.177c-.172.443-.323.891-.443 1.349c.057-.011.115-.027.172-.032c.323-.025.572.079.719.141c.459.192.771.588.943 1.041a2.2 2.2 0 0 1 .093.38a.572.572 0 0 1 .027.167a72.023 72.023 0 0 0 .015 4.984c.032.719.079 1.349.136 1.849c.057.495.135.875.188 1.005c.171.427.421.984.875 1.364c.448.381 1.093.631 2.276.381c1.025-.224 1.656-.527 2.077-.964c.423-.443.672-1.052.833-1.984c.245-1.401.729-5.464.787-6.224c-.025-.579.057-1.021.245-1.36c.187-.344.479-.557.735-.672c.124-.057.244-.093.343-.125a13.47 13.47 0 0 0-.323-.432a6.04 6.04 0 0 1-.891-1.463a7.408 7.408 0 0 0-.344-.647c-.176-.317-.4-.719-.635-1.172c-.469-.896-.979-1.989-1.245-3.052c-.265-1.063-.301-2.161.376-2.932c.599-.688 1.656-.973 3.233-.812c-.047-.141-.072-.261-.151-.443a10.469 10.469 0 0 0-1.391-2.355c-1.339-1.713-3.511-3.412-6.859-3.469zm-8.853.068a7.72 7.72 0 0 0-.505.016c-1.349.079-2.62.468-3.532 1.432c-.911.969-1.509 2.547-1.38 5.167c.027.5.24 1.885.609 3.536c.371 1.652.896 3.595 1.527 5.313c.629 1.713 1.391 3.208 2.12 3.916c.364.349.681.495.968.485c.287-.016.636-.183 1.063-.693a57.33 57.33 0 0 1 2.412-2.729a4.666 4.666 0 0 1-1.552-4.203c.135-.984.156-1.907.135-2.636c-.015-.708-.063-1.176-.063-1.473v-.032l-.005-.009c0-1.537.272-3.057.792-4.5c.375-.996.928-2 1.76-2.819c-.817-.271-2.271-.676-3.843-.755a7.764 7.764 0 0 0-.505-.016zm16.53 7.041c-.905.016-1.411.251-1.681.552c-.376.433-.412 1.193-.177 2.131c.233.937.719 1.984 1.172 2.855c.224.437.443.828.619 1.145c.183.323.313.547.391.745c.073.177.157.333.24.479c.349-.74.412-1.464.375-2.224c-.047-.937-.265-1.896-.229-2.864c.037-1.136.261-1.876.277-2.751a7.899 7.899 0 0 0-.985-.068zm-10.978.158c-.276 0-.552.036-.823.099a6.102 6.102 0 0 0-1.537.599a3.319 3.319 0 0 0-.463.303l-.032.025c.011.199.047.667.063 1.365c.016.76 0 1.728-.145 2.776c-.323 2.281 1.333 4.167 3.276 4.172c.115-.469.301-.944.489-1.443c.541-1.459 1.604-2.521.708-6.677c-.145-.677-.437-.953-.839-1.109a1.935 1.935 0 0 0-.697-.109zm10.557.27h.068c.083.005.167.011.239.031a.532.532 0 0 1 .183.073a.21.21 0 0 1 .099.145v.011a.386.386 0 0 1-.047.183a.92.92 0 0 1-.145.197a.875.875 0 0 1-.516.281a.78.78 0 0 1-.547-.135a1.04 1.04 0 0 1-.172-.157a.318.318 0 0 1-.084-.172a.235.235 0 0 1 .052-.171a.69.69 0 0 1 .157-.12c.129-.073.301-.125.5-.152c.072-.009.145-.015.213-.02zm-10.428.224c.068 0 .147.005.22.015c.208.032.385.084.525.167a.52.52 0 0 1 .177.141a.32.32 0 0 1 .073.224a.44.44 0 0 1-.1.208a.847.847 0 0 1-.192.172a.841.841 0 0 1-.599.151a.96.96 0 0 1-.557-.301a1.061 1.061 0 0 1-.157-.219a.36.36 0 0 1-.057-.24c.021-.14.141-.219.256-.26c.131-.043.271-.057.411-.052zm12.079 9.791h-.005c-.192.073-.353.1-.489.163a.587.587 0 0 0-.317.285c-.089.152-.156.423-.136.885a.622.622 0 0 0 .199.095c.224.068.609.115 1.036.109c.849-.011 1.896-.208 2.453-.469a5.25 5.25 0 0 0 1.255-.817c-1.859.38-2.905.281-3.552.016a1.935 1.935 0 0 1-.443-.267zm-10.708.125h-.027c-.072.005-.172.032-.375.251c-.464.52-.625.848-1.005 1.151c-.385.307-.88.469-1.875.672a2.573 2.573 0 0 0-.615.192c.036.032.036.043.093.068c.147.084.333.152.485.193c.427.104 1.124.229 1.859.104c.729-.125 1.489-.475 2.141-1.385c.115-.156.124-.391.031-.641c-.093-.244-.297-.463-.437-.52a1.033 1.033 0 0 0-.276-.084z"
          />
        </g>
      </svg>
    </svg>
  );
};