@extends('layouts.app') <!--estendo layout.app-->

@section('content')

<h1>MENU'</h1>
@foreach ($dishes as $item)


    Name:{{$item->name}} <span class="mx-5">Price:{{$item->price}}</span>



@endforeach
@endsection
