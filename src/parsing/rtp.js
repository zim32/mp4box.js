BoxParser["rtp Box"].prototype.parse = function(stream) {
	this.descriptionformat = stream.readString(4);
	this.sdptext = stream.readString(this.size - this.hdr_size - 4);
}

