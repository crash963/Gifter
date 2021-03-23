<?php

namespace App\Services;

use Illuminate\Support\Str;
use DiDom\Document;

class MetaScraperService
{
    public function scrape($url, $no_cache = false)
    {
        $cache_file = $this->getCacheFile($url);

        if ($no_cache || !file_exists($cache_file)) {

            if (!file_exists(dirname($cache_file))) {
                mkdir(dirname($cache_file), 0777, true);
            }

            $client = new \GuzzleHttp\Client();

            $response = $client->get(
                $url,
                [
                    'verify' => true,
                    'sink' => $cache_file
                ]
            );

        }

        $html = file_get_contents($cache_file);

        $data = $this->parseDocument($html);

        return $data;
    }

    public function parseDocument($html)
    {
        $data = [];

        $document = new Document($html);


        // getting and saving name
        $h1 = $document->find('h1');
        $data["name"] = trim($h1[0]->text());

        // geting and saving description
        $description = $document->find(".nameextc span");
        $data["description"] = $description[0]->text();

        // getting image
        // $image_array = $document->find("#imgMain");
        // $image_url = $image_array[0]->getAttribute("data-src");
        // $image = file_get_contents($image_url);
        
        $image_array = $document->find("#imgMain");
        $image_url = $image_array[0]->getAttribute("src") ?? $image_array[0]->getAttribute("data-src");
        $image = file_get_contents($image_url);
        
        // creating image path
        $img_name = str_replace(' ', '-', $data["name"]); // Replaces all spaces with hyphens.
        $img_name = preg_replace('/[^A-Za-z0-9\-]/', '', $img_name);
        $image_path = "../public/images/wish_pictures/" . $img_name . ".jpg";

        // adding image url to return data object
        $data["photo"] = substr($image_path, 16);

        //saving image to public/images/wish_pictures/....
        file_put_contents($image_path, $image);
        
        return $data;
    }

    public function getCacheFile($url)
    {
        return storage_path('meta-scraping/cache/'.Str::slug($url).'.html');
    }
}