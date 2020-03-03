using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Net;
using System.IO;
using System.Xml;
using System.Web.Script.Serialization;
using System.Net.Http;
using Newtonsoft.Json;

namespace ConcertFinder
{
    
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class Service1 : IService1
    {
        private const string API_Key = "3QIvq55bS608ai6r8moig1WdW57bONry";

        public Options[] findConcert(string city, string keyword)
        {
            string urlStr = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + city + "&keyword=" +  keyword +"&apikey=" + API_Key;
            string url = @urlStr;

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            WebResponse response = request.GetResponse();
            Stream responseStream = response.GetResponseStream();
            StreamReader sreader = new StreamReader(responseStream);
            string results = sreader.ReadToEnd();
            response.Close();

            //return results;

            var output = JsonConvert.DeserializeObject<RootObject>(results);

            Options[] ops = new Options[5];
            string name;
            string hyperLink;
            string img;
            int j = 5;


            if (output.page.totalElements < 1)
            {
                ops[0] = new Options("error", "", "");
                return ops;

            }


            if (output.page.totalElements < 5)
            {
                j = output.page.totalElements;
            }
           
            for(int i = 0; i < j; i++)
            {
                
                name = output._embedded.events[i].name;
                hyperLink = output._embedded.events[i].url;
                img = output._embedded.events[i].images[0].url;

                ops[i] = new Options(name, hyperLink, img);

                if (j < 5)
                {
                    ops[i].setElements(output.page.totalElements);
                }

            }
            return ops;
        }




        public class Image
        {
            public string ratio { get; set; }
            public string url { get; set; }
            public int width { get; set; }
            public int height { get; set; }
            public bool fallback { get; set; }
        }

        public class Public
        {
            public DateTime startDateTime { get; set; }
            public bool startTBD { get; set; }
            public DateTime endDateTime { get; set; }
        }

        public class Presale
        {
            public DateTime startDateTime { get; set; }
            public DateTime endDateTime { get; set; }
            public string name { get; set; }
        }

        public class Sales
        {
            public Public @public { get; set; }
            public List<Presale> presales { get; set; }
        }

        public class Start
        {
            public string localDate { get; set; }
            public string localTime { get; set; }
            public DateTime dateTime { get; set; }
            public bool dateTBD { get; set; }
            public bool dateTBA { get; set; }
            public bool timeTBA { get; set; }
            public bool noSpecificTime { get; set; }
        }

        public class Status
        {
            public string code { get; set; }
        }

        public class Dates
        {
            public Start start { get; set; }
            public string timezone { get; set; }
            public Status status { get; set; }
            public bool spanMultipleDays { get; set; }
        }

        public class Segment
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class Genre
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class SubGenre
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class Type
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class SubType
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class Classification
        {
            public bool primary { get; set; }
            public Segment segment { get; set; }
            public Genre genre { get; set; }
            public SubGenre subGenre { get; set; }
            public Type type { get; set; }
            public SubType subType { get; set; }
            public bool family { get; set; }
        }

        public class Promoter
        {
            public string id { get; set; }
            public string name { get; set; }
            public string description { get; set; }
        }

        public class Promoter2
        {
            public string id { get; set; }
            public string name { get; set; }
            public string description { get; set; }
        }

        public class PriceRange
        {
            public string type { get; set; }
            public string currency { get; set; }
            public double min { get; set; }
            public double max { get; set; }
        }

        public class Seatmap
        {
            public string staticUrl { get; set; }
        }

        public class TicketLimit
        {
            public string info { get; set; }
        }

        public class Self
        {
            public string href { get; set; }
        }

        public class Attraction
        {
            public string href { get; set; }
        }

        public class Venue
        {
            public string href { get; set; }
        }

        public class Links
        {
            public Self self { get; set; }
            public List<Attraction> attractions { get; set; }
            public List<Venue> venues { get; set; }
        }

        public class Image2
        {
            public string ratio { get; set; }
            public string url { get; set; }
            public int width { get; set; }
            public int height { get; set; }
            public bool fallback { get; set; }
            public string attribution { get; set; }
        }

        public class City
        {
            public string name { get; set; }
        }

        public class State
        {
            public string name { get; set; }
            public string stateCode { get; set; }
        }

        public class Country
        {
            public string name { get; set; }
            public string countryCode { get; set; }
        }

        public class Address
        {
            public string line1 { get; set; }
        }

        public class Location
        {
            public string longitude { get; set; }
            public string latitude { get; set; }
        }

        public class Market
        {
            public string name { get; set; }
            public string id { get; set; }
        }

        public class Dma
        {
            public int id { get; set; }
        }

        public class Twitter
        {
            public string handle { get; set; }
        }

        public class Social
        {
            public Twitter twitter { get; set; }
        }

        public class BoxOfficeInfo
        {
            public string phoneNumberDetail { get; set; }
            public string openHoursDetail { get; set; }
            public string acceptedPaymentDetail { get; set; }
            public string willCallDetail { get; set; }
        }

        public class GeneralInfo
        {
            public string generalRule { get; set; }
            public string childRule { get; set; }
        }

        public class UpcomingEvents
        {
            public int _total { get; set; }
            public int tmr { get; set; }
            public int ticketmaster { get; set; }
        }

        public class Self2
        {
            public string href { get; set; }
        }

        public class Links2
        {
            public Self2 self { get; set; }
        }

        public class Venue2
        {
            public string name { get; set; }
            public string type { get; set; }
            public string id { get; set; }
            public bool test { get; set; }
            public string url { get; set; }
            public string locale { get; set; }
            public List<Image2> images { get; set; }
            public string postalCode { get; set; }
            public string timezone { get; set; }
            public City city { get; set; }
            public State state { get; set; }
            public Country country { get; set; }
            public Address address { get; set; }
            public Location location { get; set; }
            public List<Market> markets { get; set; }
            public List<Dma> dmas { get; set; }
            public Social social { get; set; }
            public BoxOfficeInfo boxOfficeInfo { get; set; }
            public string parkingDetail { get; set; }
            public string accessibleSeatingDetail { get; set; }
            public GeneralInfo generalInfo { get; set; }
            public UpcomingEvents upcomingEvents { get; set; }
            public Links2 _links { get; set; }
        }

        public class Image3
        {
            public string ratio { get; set; }
            public string url { get; set; }
            public int width { get; set; }
            public int height { get; set; }
            public bool fallback { get; set; }
        }

        public class Segment2
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class Genre2
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class SubGenre2
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class Type2
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class SubType2
        {
            public string id { get; set; }
            public string name { get; set; }
        }

        public class Classification2
        {
            public bool primary { get; set; }
            public Segment2 segment { get; set; }
            public Genre2 genre { get; set; }
            public SubGenre2 subGenre { get; set; }
            public Type2 type { get; set; }
            public SubType2 subType { get; set; }
            public bool family { get; set; }
        }

        public class UpcomingEvents2
        {
            public int _total { get; set; }
            public int tmr { get; set; }
            public int ticketmaster { get; set; }
        }

        public class Self3
        {
            public string href { get; set; }
        }

        public class Links3
        {
            public Self3 self { get; set; }
        }

        public class Attraction2
        {
            public string name { get; set; }
            public string type { get; set; }
            public string id { get; set; }
            public bool test { get; set; }
            public string url { get; set; }
            public string locale { get; set; }
            public List<string> aliases { get; set; }
            public List<Image3> images { get; set; }
            public List<Classification2> classifications { get; set; }
            public UpcomingEvents2 upcomingEvents { get; set; }
            public Links3 _links { get; set; }
        }

        public class Embedded2
        {
            public List<Venue2> venues { get; set; }
            public List<Attraction2> attractions { get; set; }
        }

        public class Outlet
        {
            public string url { get; set; }
            public string type { get; set; }
        }

        public class Event
        {
            public string name { get; set; }
            public string type { get; set; }
            public string id { get; set; }
            public bool test { get; set; }
            public string url { get; set; }
            public string locale { get; set; }
            public List<Image> images { get; set; }
            public Sales sales { get; set; }
            public Dates dates { get; set; }
            public List<Classification> classifications { get; set; }
            public Promoter promoter { get; set; }
            public List<Promoter2> promoters { get; set; }
            public string pleaseNote { get; set; }
            public List<PriceRange> priceRanges { get; set; }
            public Seatmap seatmap { get; set; }
            public TicketLimit ticketLimit { get; set; }
            public Links _links { get; set; }
            public Embedded2 _embedded { get; set; }
            public List<Outlet> outlets { get; set; }
        }

        public class Embedded
        {
            public List<Event> events { get; set; }
        }

        public class First
        {
            public string href { get; set; }
        }

        public class Self4
        {
            public string href { get; set; }
        }

        public class Next
        {
            public string href { get; set; }
        }

        public class Last
        {
            public string href { get; set; }
        }

        public class Links4
        {
            public First first { get; set; }
            public Self4 self { get; set; }
            public Next next { get; set; }
            public Last last { get; set; }
        }

        public class Page
        {
            public int size { get; set; }
            public int totalElements { get; set; }
            public int totalPages { get; set; }
            public int number { get; set; }
        }

        public class RootObject
        {
            public Embedded _embedded { get; set; }
            public Links4 _links { get; set; }
            public Page page { get; set; }
        }

    }
}
