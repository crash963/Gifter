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

        // DO YOUR PARSING HERE

        // EXAMPLE:
        $h1s = $document->find('h1');

        foreach ($h1s as $h1) {
            dump(trim($h1->text()));
        }

        return $data;
    }

    public function getCacheFile($url)
    {
        return storage_path('meta-scraping/cache/'.Str::slug($url).'.html');
    }
}