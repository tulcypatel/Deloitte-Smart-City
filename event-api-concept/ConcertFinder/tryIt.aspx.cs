using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ConcertFinder
{
    public partial class tryIt : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            IService1 proxy = new Service1();
            string keyword = RadioButtonList1.Text;
            Options[] result = proxy.findConcert(city.Text, keyword);

            if(result[0].getName().CompareTo("error") ==0)
            {
                Literal1.Text = "There are no Options in your area, try a different city or keyword.";
            }

            else if(result[0].getElements() == 1)
            {
                HyperLink6.NavigateUrl = result[0].getUrl();
                Image1.ImageUrl = result[0].getImg();
                Literal1.Text = result[0].getName();

            }

            else if (result[0].getElements() == 2)
            {
                HyperLink6.NavigateUrl = result[0].getUrl();
                Image1.ImageUrl = result[0].getImg();
                Literal1.Text = result[0].getName();

                HyperLink7.NavigateUrl = result[1].getUrl();
                Image2.ImageUrl = result[1].getImg();
                Literal2.Text = result[1].getName();
            }

            else if (result[0].getElements() == 3)
            {
                HyperLink6.NavigateUrl = result[0].getUrl();
                Image1.ImageUrl = result[0].getImg();
                Literal1.Text = result[0].getName();

                HyperLink7.NavigateUrl = result[1].getUrl();
                Image2.ImageUrl = result[1].getImg();
                Literal2.Text = result[1].getName();

                HyperLink8.NavigateUrl = result[2].getUrl();
                Image3.ImageUrl = result[2].getImg();
                Literal3.Text = result[2].getName();
            }

            else if (result[0].getElements() == 4)
            {
                HyperLink6.NavigateUrl = result[0].getUrl();
                Image1.ImageUrl = result[0].getImg();
                Literal1.Text = result[0].getName();

                HyperLink7.NavigateUrl = result[1].getUrl();
                Image2.ImageUrl = result[1].getImg();
                Literal2.Text = result[1].getName();

                HyperLink8.NavigateUrl = result[2].getUrl();
                Image3.ImageUrl = result[2].getImg();
                Literal3.Text = result[2].getName();

                HyperLink9.NavigateUrl = result[3].getUrl();
                Image4.ImageUrl = result[3].getImg();
                Literal4.Text = result[3].getName();
            }

            else
            {
                HyperLink6.NavigateUrl = result[0].getUrl();
                Image1.ImageUrl = result[0].getImg();
                Literal1.Text = result[0].getName();

                HyperLink7.NavigateUrl = result[1].getUrl();
                Image2.ImageUrl = result[1].getImg();
                Literal2.Text = result[1].getName();

                HyperLink8.NavigateUrl = result[2].getUrl();
                Image3.ImageUrl = result[2].getImg();
                Literal3.Text = result[2].getName();

                HyperLink9.NavigateUrl = result[3].getUrl();
                Image4.ImageUrl = result[3].getImg();
                Literal4.Text = result[3].getName();

                HyperLink10.NavigateUrl = result[4].getUrl();
                Image5.ImageUrl = result[4].getImg();
                Literal5.Text = result[4].getName();
            }
            
           
        }

        protected void RadioButtonList1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void city_TextChanged(object sender, EventArgs e)
        {

        }
    }
}