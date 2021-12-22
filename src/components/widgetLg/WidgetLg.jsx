import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://res.cloudinary.com/pmtdev/image/upload/v1634800837/avatar_user_pfivg6.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">pmt</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$111</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://res.cloudinary.com/pmtdev/image/upload/v1634800837/avatar_user_pfivg6.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">pmt</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$222</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://res.cloudinary.com/pmtdev/image/upload/v1634800837/avatar_user_pfivg6.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">pmt</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$333</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
