import * as React from "react"

function FaacebookLogo({width="20px", height="20px", ...rest}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" 
    {...rest}
    width={width}
    height={height}
    >
<path d="M7.02544 20H3.81635C3.28033 20 2.8443 19.5648 2.8443 19.0298V11.8057H0.972052C0.436032 11.8057 0 11.3704 0 10.8356V7.74002C0 7.20505 0.436032 6.76987 0.972052 6.76987H2.8443V5.21973C2.8443 3.68271 3.32788 2.37503 4.2426 1.43829C5.16145 0.497284 6.44554 0 7.95606 0L10.4035 0.00396727C10.9386 0.00488281 11.3738 0.440064 11.3738 0.974121V3.84827C11.3738 4.38324 10.938 4.81842 10.4021 4.81842L8.75428 4.81903C8.25174 4.81903 8.12378 4.91959 8.09641 4.95041C8.05131 5.00153 7.99765 5.14603 7.99765 5.54504V6.76972H10.2783C10.4499 6.76972 10.6163 6.81198 10.7592 6.89163C11.0676 7.0636 11.2593 7.38876 11.2593 7.74017L11.2581 10.8357C11.2581 11.3704 10.8221 11.8056 10.2861 11.8056H7.99765V19.0298C7.99765 19.5648 7.56146 20 7.02544 20V20ZM4.01908 18.8275H6.82271V11.2808C6.82271 10.9236 7.11396 10.6331 7.47172 10.6331H10.0833L10.0844 7.94235H7.47156C7.11381 7.94235 6.82271 7.65183 6.82271 7.29462V5.54504C6.82271 5.08698 6.86934 4.56604 7.21578 4.1745C7.63439 3.70117 8.29409 3.64655 8.75397 3.64655L10.1991 3.64594V1.17615L7.95514 1.17249C5.52761 1.17249 4.01908 2.72339 4.01908 5.21973V7.29462C4.01908 7.65167 3.72798 7.94235 3.37023 7.94235H1.17478V10.6331H3.37023C3.72798 10.6331 4.01908 10.9236 4.01908 11.2808V18.8275ZM10.4012 1.17645H10.4013H10.4012Z" fill="black"/>
</svg>

  )
}

export default FaacebookLogo