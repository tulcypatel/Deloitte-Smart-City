using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public class Options
{
    string eventName;
    string eventUrl;
    string eventImgUrl;
    int totalElements;

    public Options(string name, string url, string img)
    {
        eventName = name;
        eventUrl = url;
        eventImgUrl = img;

    }

    public string getName()
    {
        return eventName;
    }

    public string getUrl()
    {
        return eventUrl;
    }

    public string getImg()
    {
        return eventImgUrl;
    }

    public void setElements(int num)
    {
        totalElements = num;
    }

    public int getElements()
    {
        return totalElements;
    }

}
